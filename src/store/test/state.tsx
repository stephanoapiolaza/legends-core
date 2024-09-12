import React, {useReducer} from "react";
import reducer from './reducer';
import TestContext from "./context";
import {Test} from "../../domain/Test";
import {Question} from "../../domain/Question";

export type StateType = {
  loading: boolean,
  error: {
    enabled: boolean,
    message: string
  },
  tests: Test[],
  draftQuestions: Question[],
  test: Test|undefined
}

export const initialState: StateType = {
  loading: false,
  error: {
    enabled: false,
    message: ""
  },
  draftQuestions: [],
  tests: [],
  test: undefined
};

const TestState = ({children}: {children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const value: any = {state, dispatch};
  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
};

export {TestState};
