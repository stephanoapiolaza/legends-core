import HttpConfig from "./common/ axios-config";
import {Question} from "../domain/Question";
import {AxiosResponse} from "axios";
import {Test} from "../domain/Test";

export default class TestRepository {
  static startTest = (id: string): Promise<AxiosResponse<Test>> => HttpConfig.rest().put(`/tests/${id}/start`);
  static submitTest = (id: string, questions: Question[]): Promise<AxiosResponse<Test>> => HttpConfig.rest().put(`/tests/${id}/submit`,{questions});
  static getTestById = (id: string): Promise<AxiosResponse<Test>> =>  HttpConfig.rest().get(`/tests/${id}`);

}
