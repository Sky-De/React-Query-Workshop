import axios from "axios";
import { useInfiniteQuery } from "react-query";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Color } from "../hooks/usePaginatedColors";
import { Fragment } from "react/jsx-runtime";

const fetchColors = (pageParams: number) =>
  axios.get(`http://localhost:1313/colors?_page=${pageParams}&_per_page=2`);

const InfiniteColors = () => {
  const {
    data,
    isError,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{ data: Color[] }, Error>({
    queryKey: ["colors"],
    queryFn: ({ pageParam = 1 }) => fetchColors(pageParam),
    getNextPageParam(_lastPage, allPages) {
      if (allPages.length < 4) return allPages.length + 1;
      else return undefined;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  return (
    <main>
      <div>
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.data.data.map((color: Color) => (
                <h2 key={color.id}>
                  {color.id}.{color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      {/* <ColorsList data={data?.pages[0].data.data} /> */}
      <button
        className="border disabled:bg-gray-400 disabled:cursor-not-allowed px-2 py-1"
        disabled={!hasNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? <Loading /> : "Load more"}
      </button>
    </main>
  );
};

export default InfiniteColors;
