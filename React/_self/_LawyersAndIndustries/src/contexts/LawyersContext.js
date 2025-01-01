import React from "react";
import { createContext, useContext } from "react";

export const LawyersContext = createContext({
  lawyers: [
    // {
    //   l_id: 1,
    //   l_name: "Real Estate",
    //   l_bio:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, tempore iure a repellendus laborum modi exercitationem deleniti, ex adipisci assumenda odio maxime mollitia voluptas qui accusamus fugiat, maiores accusantium? Ratione?",
    //   l_gender: "male",
    //   l_dob: "1990-05-20",
    //   l_photo: "/url",
    //   l__i_id: 1,
    // },
  ],
  addLawyer: (lawyer) => {},
});

export const useLawyers = () => {
  return useContext(LawyersContext);
};

export const LawyersProvider = LawyersContext.Provider;
