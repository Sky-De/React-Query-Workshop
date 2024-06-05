import { FC } from "react";
import SuperHeroList from "../components/SuperHeroList";
import { useGetRQSuperheroes } from "../hooks/useGetRQSuperheroes";
import { usePostSuperhero } from "../hooks/usePostSuperhero";
import Loading from "../components/Loading";

const RQSuperHeroes: FC = () => {
  const { fetchStatus, refetch, superheroes } = useGetRQSuperheroes();
  const { handleSubmitForm, inputChangeHandler, newHero, isLoading } =
    usePostSuperhero();

  return (
    <main>
      <div className="">
        <form className="my-2 flex flex-col gap-2" onSubmit={handleSubmitForm}>
          <input
            className="pl-1 border w-full md:w-1/4"
            name="name"
            type="text"
            value={newHero.name}
            onChange={inputChangeHandler}
            placeholder="name"
          />
          <input
            className="pl-1 border w-full md:w-1/4"
            name="alterEgo"
            type="text"
            value={newHero.alterEgo}
            onChange={inputChangeHandler}
            placeholder="alter ego"
          />
          <button
            type="submit"
            disabled={!newHero.alterEgo || !newHero.name || isLoading}
            className="py-1 px-2 flex justify-center capitalize border w-full md:w-1/4 disabled:bg-gray-400 disabled:cursor-not-allowed"
            title={
              !newHero.alterEgo || !newHero.name
                ? "fill inputs first"
                : "submit"
            }
          >
            {isLoading ? <Loading /> : "add hero"}
          </button>
        </form>
      </div>
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
