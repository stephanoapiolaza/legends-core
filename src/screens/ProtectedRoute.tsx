import React, {useCallback, useEffect} from "react";
import {useSecurity} from "../store/security/context";
import useLocalStorage from "../hooks/useLocalStorage";
import {LocalStorageItem} from "../domain/LocalStorageItem";
import {Outlet, useLocation} from "react-router-dom";
import PickGame from "./pick-game/PickGame";

const ProtectedRoute = ({children}: any) => {
  const [state, dispatch] = useSecurity();
  const location = useLocation();
  const [storeHistory, setStoreHistory] = useLocalStorage(LocalStorageItem.HISTORY, {});
  const [storeCredential, setStoreCredential] = useLocalStorage(LocalStorageItem.CREDENTIAL, {});

  useEffect(() => {
    if (storeCredential?.token === undefined) {
      setStoreHistory({uri: location.pathname});
    }
  }, []);

  const isAuthenticated = useCallback((): boolean => {
    return state.logged?.user;
  }, [state.logged]);

  if (!isAuthenticated()) {
    return <PickGame />;
  }
  return <Outlet />
}

export default ProtectedRoute;
