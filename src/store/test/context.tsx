import {createContext, useContext} from 'react'
import {StateType} from "./state";

const TestContext = createContext<StateType| null>(null);

export const useTest = () => {
  const context = useContext<StateType| null>(TestContext);
  if (context === undefined) {
    throw new Error('UseAssessment must be used within a <TestContext.Provider>')
  }
  const {state, dispatch}: any = context;
  return [state, dispatch];
};

export default TestContext;
