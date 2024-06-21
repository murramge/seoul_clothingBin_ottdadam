import React, { createContext, useReducer, useContext } from "react";

const StateContext = createContext();

const initialState = {
  GuSelected: "",
  DongSelected: "",
  selectAddress: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GU_SELECTED":
      return { ...state, GuSelected: action.payload };
    case "SET_DONG_SELECTED":
      return { ...state, DongSelected: action.payload };
    case "SET_SELECT_ADDRESS":
      return { ...state, selectAddress: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
