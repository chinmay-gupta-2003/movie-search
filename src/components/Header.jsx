function Header({ query, setQuery, movies }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary rounded-lg">
      <div className="flex items-center gap-2 text-text">
        <span className="text-2xl">🍿</span>
        <h1 className="text-xl font-semibold">Cinema Time</h1>
      </div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-lg w-1/3 bg-primary-light text-text placeholder-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <p className="text-text text-sm">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default Header;
