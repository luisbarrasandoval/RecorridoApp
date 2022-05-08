import { createContext } from "react";

const headerContext = createContext({
  searchRef: null,
  setSearchRef: () => {},
})