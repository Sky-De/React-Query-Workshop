import ColorsList from "../components/ColorsList";
import PaginationController from "../components/PaginationController";
import { usePaginatedColors } from "../hooks/usePaginatedColors";

const PaginatedColors = () => {
  const { data, pageNumber, nextPage, prePage, setPage } = usePaginatedColors();
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
    </main>
  );
};

export default PaginatedColors;
