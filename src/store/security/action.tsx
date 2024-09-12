import {AxiosResponse} from "axios/index";
import SecurityRepository from "../../repositories/security.repository";
import {SecurityAccess} from "../../domain/SecurityAccess";
import {RoutingPath} from "../../screens/routing";

export default class SecurityAction {

  static type: any = {
    oauth: 'OAUTH',
    login: 'LOGIN',
    reset: 'RESET',
    loading: 'LOADING',
    error: 'ERROR'
  };
  static setLoading = (dispatch: any, status: boolean) => dispatch({type: SecurityAction.type.loading, payload: status});
  static setError = (dispatch: any, message: string) => dispatch({type: SecurityAction.type.error, payload: message});

  static goToFederationAuth = async (dispatch: any, provider: 'google'|'outlook'|'linkedin'): Promise<Credential|any> => {
    if (window !== undefined) {
      window.location.href = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080'}/oauth/${provider}?origin=${window.location?.origin}&redirect=${window.location?.origin}${RoutingPath.login}`;
    }
  };

  static login = async (dispatch: any): Promise<SecurityAccess|any> => {
    SecurityAction.setLoading(dispatch, true);
    return new Promise((resolve, reject) => SecurityRepository.login().then(async (result: AxiosResponse<SecurityAccess>) => {
      await dispatch({type: SecurityAction.type.login, payload: result.data});
      resolve(result.data);
    }).catch(async (error) => {
      await dispatch({type: SecurityAction.type.error, payload: error});
      console.log(`check de console ${error}`);
      reject(error);
    })).finally(() => SecurityAction.setLoading(dispatch, false));
  };

  static resetUserLogged = async (dispatch: any): Promise<SecurityAccess|any> => {
    return dispatch({type: SecurityAction.type.reset});
  };

}
