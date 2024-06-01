import { FC } from "react";
import {
  FetchStatusState,
  SuperHeroes,
} from "../hooks/useGetReqularSuperheroes";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import { Link } from "react-router-dom";

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
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default SuperHeroList;
