import { FC } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useGetReqularSuperheros } from "../hooks/useGetReqularSuperheroes";

const SuperHeroes: FC = () => {
  const {
    fetchStatus,
    superheroes,
    getSuperheroes: reFetch,
  } = useGetReqularSuperheros();

  if (fetchStatus.isLoading) return <Loading />;
  if (fetchStatus.isErro)
    return <ErrorMessage message={fetchStatus.errorMessage} />;

  return (
    <main>
      <ul>
        {superheroes.length > 0 &&
          superheroes.map((hero) => (
            <li key={hero.id}>
              {hero.name} : {hero.alterEgo}
            </li>
          ))}
      </ul>
      <button onClick={reFetch} className="border px-2 py-1 cursor-pointer">
        reFetch
      </button>
    </main>
  );
};

export default SuperHeroes;
