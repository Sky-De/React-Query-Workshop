import { usePaginatedColors } from "../hooks/usePaginatedColors";

const PaginatedColors = () => {
  const { data, pageNumber, nextPage, prePage, setPage } = usePaginatedColors();
  return (
    <main>
      <ul>
        {data?.data.data.map((color) => (
          <li key={color.id}>{color.label}</li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button
          disabled={pageNumber === 1}
          onClick={prePage}
          className="border px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Pre
        </button>
        {Array(data?.data.pages)
          .fill(null)
          .map((_, index) => (
            <li
              onClick={() => setPage(index + 1)}
              className={`cursor-pointer list-none ${
                pageNumber === index + 1 ? "text-blue-500" : ""
              }`}
            >
              {index + 1}
            </li>
          ))}
        <button
          disabled={pageNumber === data?.data.pages}
          onClick={nextPage}
          className="border px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default PaginatedColors;
