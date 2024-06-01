import { useQuery } from "react-query";
import { SuperHeroes } from "./useGetReqularSuperheroes";
import axios from "axios";

const fetchSuperHeroes = () => axios.get("http://localhost:1313/superheroes");
const onSuccess = (data: SuperHeroes) =>
  console.log("Perform side effect after data fetching", data);
const onError = (error: Error) =>
  console.log("Perform side effect after encountering error", error);

export const useGetRQSuperheroes = () => {
  const { data, isLoading, isError, refetch, error } = useQuery<
    {
      data: SuperHeroes;
    },
    Error,
    SuperHeroes
  >("super-heroes", fetchSuperHeroes, {
    // // 1 - default 5min
    // cacheTime: 5000,
    // // 2 - default true
    // refetchOnMount: true,
    // // 3 - default true
    // refetchOnWindowFocus: "always",
    // // 4 - polling (refetchInterval) - default false
    // // while browser is not in focus it will stop
    // refetchInterval: 1000,
    // // 5 - while browser is not in focus it will continue
    // refetchIntervalInBackground: true,
    // // 6 - Performs side effects base on res status
    onSuccess,
    onError,
    // // 7 - default staleTime: 0
    // // with staleTime keeps query fresh which means
    // // until that time pass it will not refetch
    // // this is way to reduce the number network requests
    // staleTime: 30000,
    // // 8 - default enabled = true
    // // with enabled false it prevents fetching on component mount
    // // then we need to use refetch along with an event to fetch data
    // enabled: false,
    // // select data - it transforms data to the form that we want
    // // we can map it - filter it - change the name or ... then return it
    select: (data) => {
      const superheroes = data?.data;
      return superheroes;
    },
  });
  const superheroes = data || [];
  const fetchStatus = {
    isError,
    isLoading,
    errorMessage: error?.message || "Request failed, try again",
  };

  return { superheroes, fetchStatus, refetch };
};
