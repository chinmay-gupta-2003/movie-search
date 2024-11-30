import React from "react";

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="absolute right-10 bottom-4 flex gap-4">
      <button
        className="px-4 py-2 bg-primary text-white rounded-lg"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-background-100 text-text rounded">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-primary text-white rounded-lg"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
