import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export interface Color {
  id: number;
  label: string;
}
export interface PaginatedRes {
  data: Color[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

const fetchColors = (pageNumber: number) =>
  axios.get(`http://localhost:1313/colors?_page=${pageNumber}&_per_page=2`);

export const usePaginatedColors = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const useQueryResult = useQuery<{ data: PaginatedRes }>(
    ["colors", pageNumber],
    () => fetchColors(pageNumber)
  );
  console.log(useQueryResult.data?.data);

  const nextPage = () => {
    if (pageNumber === useQueryResult.data?.data.pages) return;
    setPageNumber(pageNumber + 1);
  };
  const prePage = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const setPage = (selectedPage: number) => setPageNumber(selectedPage);
  return {
    ...useQueryResult,
    pageNumber,
    pages: useQueryResult.data?.data.pages,
    nextPage,
    prePage,
    setPage,
  };
};
