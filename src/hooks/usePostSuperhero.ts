import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();
  const { mutate: addHero, ...restMutaionRes } = useMutation(addSuperhero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      // // updating existing cached query data without
      // // additional network request using queryClient.setQueryData and
      // // returned new hero obj by mutate
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });

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
