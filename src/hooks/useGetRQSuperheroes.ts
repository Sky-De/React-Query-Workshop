import { useQuery } from "react-query";
import { SuperHeroes } from "./useGetReqularSuperheroes";
import axios from "axios";

const fetchSuperHeroes = () => axios.get("http://localhost:1313/superheroes");
const onSuccess = (data: { data: SuperHeroes }) =>
  console.log("Perform side effect after data fetching", data.data);
const onError = (error: Error) =>
  console.log("Perform side effect after encountering error", error);

export const useGetRQSuperheroes = () => {
  const { data, isLoading, isError, refetch, error } = useQuery<
    { data: SuperHeroes },
    Error
  >("super-heroes", fetchSuperHeroes, {
    // // default 5min
    // cacheTime: 5000,
    // // default true
    // refetchOnMount: true,
    // // default true
    // refetchOnWindowFocus: "always",
    // // polling (refetchInterval) - default false
    // // while browser is not in focus it will stop
    // refetchInterval: 1000,
    // // while browser is not in focus it will continue
    // refetchIntervalInBackground: true,
    // // Performs side effects base on res status
    // onSuccess,
    // onError,
    // // default staleTime: 0
    // // with staleTime keeps query fresh which means
    // // until that time pass it will not refetch
    // // this is way to reduce the number network requests
    staleTime: 30000,
  });
  const superheroes = data?.data || [];
  const fetchStatus = {
    isError,
    isLoading,
    errorMessage: error?.message || "Request failed, try again",
  };

  return { superheroes, fetchStatus, refetch };
};
