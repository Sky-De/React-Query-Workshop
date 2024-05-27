import { FC } from "react";
import { useGetReqularSuperheros } from "../hooks/useGetReqularSuperheroes";
import SuperHeroList from "../components/SuperHeroList";

const SuperHeroes: FC = () => {
  const {
    fetchStatus,
    superheroes,
    getSuperheroes: reFetch,
  } = useGetReqularSuperheros();

  return (
    <main>
      <SuperHeroList fetchStatus={fetchStatus} superheroes={superheroes} />
      <button
        disabled={fetchStatus.isLoading}
        onClick={reFetch}
        className="border px-2 py-1 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        reFetch
      </button>
    </main>
  );
};

export default SuperHeroes;
