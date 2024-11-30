import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import restClient from "../restClient";

import Header from "../components/Header";
import Pagination from "../components/Pagination";
import MovieDetails from "../components/MovieDetails";

function MovieList() {
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState({});
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    const cacheKey = `${query}-${page}`;

    if (cache[cacheKey]) {
      setMovies(cache[cacheKey].movies);
      setTotalPages(cache[cacheKey].totalPages);

      return;
    }

    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/search/movie",
        params: {
          query,
          include_adult: false,
          language: "en-US",
          page: page,
        },
      });

      setCache((prevCache) => ({
        ...prevCache,
        [cacheKey]: { movies: data.results, totalPages: data.total_pages },
      }));

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 2) getMovies();
    else {
      setMovies([]);
      setPage(1);
    }
  }, [query, page]);

  return (
    <div className="flex flex-col gap-4 p-4 h-screen bg-background-900">
      <Header query={query} setQuery={setQuery} movies={movies} />
      <ul className="flex flex-col gap-4 overflow-auto min-h-[4rem]">
        {isLoading && (
          <div className="flex justify-center">
            <ClipLoader color="#6741d9" loading={isLoading} size={30} />
          </div>
        )}
        {!isLoading && movies.length > 0 && (
          <>
            <button
              className="absolute right-10 px-4 py-2 bg-primary text-white rounded-lg w-max"
              onClick={() =>
                setMovies((prev) =>
                  [...prev].sort((a, b) => b.vote_average - a.vote_average),
                )
              }
            >
              Sort by Rating
            </button>
            {movies?.map((movie) => (
              <li
                key={movie.id}
                className="flex items-start gap-4 p-4 border-b border-background-100"
              >
                <MovieDetails movie={movie} />
              </li>
            ))}
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
        {!isLoading && query.length <= 2 && (
          <p className="text-text text-center">
            Type at least 3 characters to search
          </p>
        )}
        {!isLoading && query.length > 2 && movies.length === 0 && (
          <p className="text-text text-center">No movies found</p>
        )}
      </ul>
    </div>
  );
}

export default MovieList;
