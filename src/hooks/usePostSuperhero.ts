import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "react-query";
interface Hero {
  name: string;
  alterEgo: string;
}
type NewHeroType = {
  name: string;
  alterEgo: string;
};
const initialNewHero: NewHeroType = {
  alterEgo: "",
  name: "",
};

const addSuperhero = (hero: Hero) => {
  return axios.post("http://localhost:1313/superheroes", hero);
};

export const usePostSuperhero = () => {
  const [newHero, setNewHero] = useState<NewHeroType>(initialNewHero);
  const { mutate: addHero, ...restMutaionRes } = useMutation(addSuperhero);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newHero);
    addHero(newHero);
    setNewHero(initialNewHero);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHero({ ...newHero, [e.target.name]: e.target.value });
  };

  return { ...restMutaionRes, handleSubmitForm, inputChangeHandler, newHero };
};
