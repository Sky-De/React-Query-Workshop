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

const fetchColors = ({
  pageNumber,
  perPage,
}: {
  pageNumber: number;
  perPage: number;
}) =>
  axios.get(
    `http://localhost:1313/colors?_page=${pageNumber}&_per_page=${perPage}`
  );
type PaginatedProps = {
  colorPerPage?: number;
};

export const usePaginatedColors = ({
  colorPerPage = 2,
}: PaginatedProps = {}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectPerPage, setSelectPerPage] = useState<number>(colorPerPage);
  console.log(selectPerPage);

  const useQueryResult = useQuery<{ data: PaginatedRes }>(
    ["colors", pageNumber, selectPerPage],
    () => fetchColors({ pageNumber, perPage: selectPerPage })
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

  const setPerPage = (selectedPerPage: number) =>
    setSelectPerPage(selectedPerPage);
  return {
    ...useQueryResult,
    pageNumber,
    pages: useQueryResult.data?.data.pages,
    nextPage,
    prePage,
    setPage,
    setPerPage,
    selectPerPage,
  };
};
