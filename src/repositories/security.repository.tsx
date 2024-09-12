import HttpConfig from "./common/ axios-config";
import {AxiosResponse} from "axios";
import {SecurityAccess} from "../domain/SecurityAccess";

export default class SecurityRepository {
  static login = (): Promise<AxiosResponse<SecurityAccess>> =>  HttpConfig.rest().get(`/oauth/login`);
}
