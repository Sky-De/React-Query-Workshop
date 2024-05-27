import { useQuery } from "react-query";
import { SuperHeroes } from "./useGetReqularSuperheroes";
import axios from "axios";

export const useGetRQSuperheroes = () => {
  const { data, isLoading, isError, refetch, error } = useQuery<
    { data: SuperHeroes },
    Error
  >("super-heroes", () => {
    return axios.get("http://localhost:1313/superheroes");
  });
  const superheroes = data?.data || [];
  const fetchStatus = {
    isError,
    isLoading,
    errorMessage: error?.message || "Request failed, try again",
  };

  return { superheroes, fetchStatus, refetch };
};
