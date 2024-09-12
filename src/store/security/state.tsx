import React, {useReducer} from "react";
import reducer from './reducer';
import {User} from "../../domain/User";
import SecurityContext from "./context";

export type StateType = {
  loading: boolean,
  error: {
    enabled: boolean,
    message: string
  },
  logged: {
    access_token: string,
    user: User|undefined,
    scopes: string[]|undefined
  }
}

export const initialState: StateType = {
  loading: false,
  error: {
    enabled: false,
    message: ""
  },
  logged: {
    access_token: '',
    user: undefined,
    scopes: undefined
  },
};

const SecurityState = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const value: any = {state, dispatch};
  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export {SecurityState};
