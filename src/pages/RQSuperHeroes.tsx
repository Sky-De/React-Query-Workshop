import { FC } from "react";
import SuperHeroList from "../components/SuperHeroList";
import { useGetRQSuperheroes } from "../hooks/useGetRQSuperheroes";

const RQSuperHeroes: FC = () => {
  const { fetchStatus, refetch, superheroes } = useGetRQSuperheroes();
  return (
    <main>
      <SuperHeroList superheroes={superheroes} fetchStatus={fetchStatus} />
      <button
        disabled={fetchStatus.isLoading}
        onClick={() => refetch()}
        className="border px-2 py-1 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        reFetch
      </button>
    </main>
  );
};

export default RQSuperHeroes;
