import { createContext, useReducer, useEffect } from "react";
import { Reducer, ReducerAdmin, ReducerFacilitator } from "./Reducer";

const INITIAL_STATE = {
  student: JSON.parse(localStorage.getItem("student")) || null,
  isFetching: false,
  error: false
};

const INITIAL_STATE_ADMIN = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false
};

const INITIAL_STATE_FACILITATOR = {
  facilitator: JSON.parse(localStorage.getItem("facilitator")) || null,
  isFetching: false,
  error: false
};

export const Context = createContext(INITIAL_STATE);
export const ContextAdmin = createContext(INITIAL_STATE_ADMIN);
export const ContextFacilitator = createContext(INITIAL_STATE_FACILITATOR);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(state.student));
  }, [state.student]);
  return (
    <Context.Provider
      value={{
        student: state.student,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const ContextProviderAdmin = ({ children }) => {
  const [state, dispatch] = useReducer(
    ReducerAdmin,
    INITIAL_STATE_ADMIN
  );

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <ContextAdmin.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </ContextAdmin.Provider>
  );
};

export const ContextProviderFacilitator = ({ children }) => {
  const [state, dispatch] = useReducer(
    ReducerFacilitator,
    INITIAL_STATE_FACILITATOR
  );

  useEffect(() => {
    localStorage.setItem("facilitator", JSON.stringify(state.facilitator));
  }, [state.facilitator]);
  return (
    <ContextFacilitator.Provider
      value={{
        facilitator: state.facilitator,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </ContextFacilitator.Provider>
  );
};
