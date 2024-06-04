import axios from "axios";
import { useQuery } from "react-query";
import { SuperHeroes } from "../hooks/useGetReqularSuperheroes";

const fetchSuperheroes = () => axios.get("http://localhost:1313/superheroes");
const fetchFriends = () => axios.get("http://localhost:1313/friends");

const ParallelRQ = () => {
  const { data: superHeroesData } = useQuery(
    "super-heroes-p",
    fetchSuperheroes,
    {
      select: (data) => {
        const superHeroes: SuperHeroes = data.data;
        return superHeroes;
      },
    }
  );
  const { data: friendsData } = useQuery("friends-p", fetchFriends);
  console.log(friendsData?.data);
  console.log(superHeroesData);
  return <main>Inspect console or use ReactQueryDevtools to see results</main>;
};

export default ParallelRQ;
