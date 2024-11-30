import { useState } from "react";
import { ClipLoader } from "react-spinners";

import restClient from "../restClient";

import { IMAGE_BASE_URL } from "../constants";

function MovieDetails({ movie }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const getMovieCast = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: `/movie/${movie.id}/credits`,
      });

      setCast(data.cast);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="rounded h-48"
      />
      <div className="flex flex-col gap-2 h-full w-full">
        <h3 className="text-lg font-semibold text-text">{movie.title}</h3>
        <p className="text-text-dark text-sm">{movie.overview}</p>
        <div className="text-yellow-400 font-bold">
          {movie.vote_average.toFixed(1)}
        </div>
        <div className="flex gap-2 items-center mt-auto">
          <div className="px-4 py-2 text-white bg-primary rounded-lg w-max flex gap-2 items-center">
            <button
              className="text-sm font-semibold"
              onClick={getMovieCast}
              disabled={isLoading}
            >
              Show Cast
            </button>
            <ClipLoader color="#fff" loading={isLoading} size={16} />
          </div>
          <div className="flex gap-2 items-center">
            {cast
              ?.slice(0, 5)
              .map((actor) => actor.name)
              .join(", ")}
            {cast?.length - 5 > 0 && (
              <span
                title={cast
                  .slice(5)
                  .map((actor) => actor.name)
                  .join(", ")}
                className="text-primary text-sm font-semibold cursor-pointer"
              >
                +{cast.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
