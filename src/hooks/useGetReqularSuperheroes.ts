import axios from "axios";
import { useEffect, useState } from "react";
export type SuperHero = {
  id: number;
  name: string;
  alterEgo: string;
};
export type SuperHeroes = Array<SuperHero>;
export type FetchSuperHeroes = {
  data: SuperHeroes;
  status: number;
  statusText: string;
};
interface FetchStatusState {
  isLoading: boolean;
  isErro: boolean;
  errorMessage: string;
}
const InitialFetchStatusState: FetchStatusState = {
  isLoading: false,
  isErro: false,
  errorMessage: "",
};

export const useGetReqularSuperheros = () => {
  const [superheroes, setSuperheroes] = useState<SuperHeroes>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatusState>(
    InitialFetchStatusState
  );
  const getSuperheroes = async () => {
    setFetchStatus({ ...InitialFetchStatusState, isLoading: true });
    try {
      const { data, status, statusText }: FetchSuperHeroes = await axios.get(
        "http://localhost:1313/superheroes"
      );
      console.log(status);
      console.log(statusText);
      setSuperheroes(data);
      setFetchStatus(InitialFetchStatusState);
    } catch (error) {
      if (error instanceof Error) {
        setFetchStatus({
          isLoading: false,
          isErro: true,
          errorMessage: error.message,
        });
      } else {
        setFetchStatus({
          isLoading: false,
          isErro: true,
          errorMessage: "Error happend, try again",
        });
      }
      console.log(error);
    }
  };
  useEffect(() => {
    getSuperheroes();
  }, []);

  return { superheroes, fetchStatus, getSuperheroes };
};
