import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const useGetHero = () => {
  const { heroId } = useParams();
  const fetchSuperHero = () =>
    axios.get(`http://localhost:1313/superheroes/${heroId}`);
  const queryRes = useQuery(["super-hero", heroId], fetchSuperHero);
  return { ...queryRes, heroId };
};
