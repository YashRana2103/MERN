import React from "react";
import { createContext, useContext } from "react";

export const IndustriesContext = createContext({
  industries: [],
  addIndustries: (industry) => {},
});

export const useIndustries = () => {
  return useContext(IndustriesContext);
};

export const IndustriesProvider = IndustriesContext.Provider;