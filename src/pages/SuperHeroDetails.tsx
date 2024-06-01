import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { useGetHero } from "../hooks/useGetHero";

const SuperHeroDetails = () => {
  const { data, heroId, isLoading, isError } = useGetHero();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message="Error happend" />;
  return (
    <main>
      Hero ID : {heroId}
      <p>
        {data?.data.name} = {data?.data.alterEgo}
      </p>
    </main>
  );
};

export default SuperHeroDetails;
