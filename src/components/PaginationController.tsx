type PaginationControllerProps = {
  pageNumber: number;
  prePage: () => void;
  nextPage: () => void;
  setPage: (page: number) => void;
  totalPages: number;
};

const PaginationController = ({
  pageNumber,
  nextPage,
  prePage,
  setPage,
  totalPages,
}: PaginationControllerProps) => {
  return (
    <div className="flex gap-4">
      <button
        disabled={pageNumber === 1}
        onClick={prePage}
        className="border px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        Pre
      </button>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => (
          <li
            key={index}
            onClick={() => setPage(index + 1)}
            className={`cursor-pointer list-none ${
              pageNumber === index + 1 ? "text-blue-500" : ""
            }`}
          >
            {index + 1}
          </li>
        ))}
      <button
        disabled={pageNumber === totalPages}
        onClick={nextPage}
        className="border px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationController;
