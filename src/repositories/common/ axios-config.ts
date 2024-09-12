import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {LocalStorageItem} from "../../domain/LocalStorageItem";

export default class HttpConfig {
  private static instance: AxiosInstance| undefined;

  static rest(): AxiosInstance {
    if (HttpConfig.instance === undefined) {
      HttpConfig.instance = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080'
      });
      HttpConfig.addInterceptor();
      HttpConfig.addResponseInterceptor();
    }
    return HttpConfig.instance;
  }

  private static addInterceptor() {
    const {token}: { token: string } = JSON.parse(localStorage.getItem(LocalStorageItem.CREDENTIAL) || '');
    HttpConfig.instance && HttpConfig.instance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }, (error) => {
        return Promise.reject(error);
      }
    );
  }

  private static addResponseInterceptor() {
    HttpConfig.instance && HttpConfig.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      async (error) => {
        if (error.response && error.response.data?.notifications) {
          return Promise.reject(error.response.data?.notifications[0]?.message);
        }
      }
    );
  }

}
