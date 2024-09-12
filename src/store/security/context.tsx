import {createContext, useContext} from 'react'
import {StateType} from "./state";

const SecurityContext = createContext<StateType| null>(null);

export const useSecurity = () => {
  const context = useContext<StateType| null>(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a <useSecurity.Provider>')
  }
  const {state, dispatch}: any = context;
  return [state, dispatch];
};

export default SecurityContext;
