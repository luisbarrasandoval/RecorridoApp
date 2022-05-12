import { createContext, FC, useReducer, Dispatch, useContext } from "react";

interface IState {
  search: "";
  isSearch: boolean;
}

const defaultState: IState = {
  search: "",
  isSearch: false,
};

const headerContext = createContext<{
  search: (text: string) => void;
  close: () => void;
  text: string;
}>({
  search: () => {},
  close: () => {},
  text: "",
});

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload, isSearch: true };
    case "close":
      return { ...state, isSearch: false };
    default:
      return state;
  }
};

const HeaderContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const search = (search: string) => {
    dispatch({ type: "search", payload: search });
  };

  const close = () => {
    dispatch({ type: "close" });
  };

  return (
    <headerContext.Provider
      value={{
        search,
        close,
        text: state.search,
      }}
    >
      {children}
    </headerContext.Provider>
  );
};

const useHeaderContext = () => {
  const context = useContext(headerContext);
  return context;
};

export { HeaderContextProvider, useHeaderContext };