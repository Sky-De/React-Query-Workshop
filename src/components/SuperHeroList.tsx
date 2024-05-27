import { FC } from "react";
import {
  FetchStatusState,
  SuperHeroes,
} from "../hooks/useGetReqularSuperheroes";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

type SuperHeroListProps = {
  fetchStatus: FetchStatusState;
  superheroes: SuperHeroes;
};

const SuperHeroList: FC<SuperHeroListProps> = ({
  fetchStatus,
  superheroes,
}) => {
  if (fetchStatus.isLoading) return <Loading />;
  if (fetchStatus.isError)
    return <ErrorMessage message={fetchStatus.errorMessage} />;

  return (
    <ul>
      {superheroes.length > 0 &&
        superheroes.map((hero) => (
          <li key={hero.id}>
            {hero.name} : {hero.alterEgo}
          </li>
        ))}
    </ul>
  );
};

export default SuperHeroList;
