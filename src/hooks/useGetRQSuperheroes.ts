import { useQuery } from "react-query";
import { SuperHeroes } from "./useGetReqularSuperheroes";
import axios from "axios";

const fetchSuperHeroes = () => axios.get("http://localhost:1313/superheroes");

export const useGetRQSuperheroes = () => {
  const { data, isLoading, isError, refetch, error } = useQuery<
    { data: SuperHeroes },
    Error
  >("super-heroes", fetchSuperHeroes, {
    refetchOnMount: true,
    refetchOnWindowFocus: "always",
  });
  const superheroes = data?.data || [];
  const fetchStatus = {
    isError,
    isLoading,
    errorMessage: error?.message || "Request failed, try again",
  };

  return { superheroes, fetchStatus, refetch };
};
