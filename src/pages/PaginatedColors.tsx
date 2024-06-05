import ColorsList from "../components/ColorsList";
import PaginationController from "../components/PaginationController";
import { usePaginatedColors } from "../hooks/usePaginatedColors";

const PaginatedColors = () => {
  const {
    data,
    pageNumber,
    nextPage,
    prePage,
    setPage,
    selectPerPage,
    setPerPage,
  } = usePaginatedColors();
  return (
    <main>
      <ColorsList data={data?.data.data} />
      <PaginationController
        nextPage={nextPage}
        prePage={prePage}
        pageNumber={pageNumber}
        setPage={setPage}
        totalPages={data?.data.pages ? data?.data.pages : 0}
      />
      <select
        defaultValue={selectPerPage}
        className="border mt-4"
        name="perPage"
        id="perPage"
        onChange={(e) => setPerPage(parseInt(e.target.value))}
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
    </main>
  );
};

export default PaginatedColors;
