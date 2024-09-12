import TestRepository from "../../repositories/test.repository";
import {AxiosResponse} from "axios/index";
import {Test} from "../../domain/Test";
import {Question} from "../../domain/Question";

export default class TestAction {

  static type: any = {
    getTestById: 'GET_TEST_BY_ID',
    submitTest: 'SUBMIT_TEST',
    startTest: 'START_TEST',
    draftQuestions: "DRAFT_QUESTIONS",
    error: 'ASSESSMENT_ERROR',
    loading: "SET_LOADING"
  };
  static setLoading = (dispatch: any, status: boolean) => dispatch({type: TestAction.type.loading, payload: status});

  static getTestById = async (dispatch: any, id: string): Promise<Test|any> => {
    TestAction.setLoading(dispatch, true);
    return new Promise((resolve, reject) => TestRepository.getTestById(id).then(async (result: AxiosResponse<Test>) => {
      await dispatch({type: TestAction.type.getAssessmentById, payload: result.data, key: id});
      resolve(result.data);
    }).catch(async (error) => {
      await dispatch({type: TestAction.type.error, payload: error});
      console.log(`check de console ${error}`);
      reject(error);
    })).finally(() => TestAction.setLoading(dispatch, false));
  };

  static startTest = async (dispatch: any, id: string) => {
    TestAction.setLoading(dispatch, true);
    return new Promise((resolve, reject) => TestRepository.startTest(id).then(async (result: AxiosResponse<Test>) => {
      await dispatch({type: TestAction.type.startAssessment, payload: result.data});
      resolve(result.data);
    }).catch(async (error) => {
      await dispatch({type: TestAction.type.error, payload: error});
      console.log(`check de console ${error}`);
      reject(error);
    })).finally(() => TestAction.setLoading(dispatch, false));
  };

  static submitTest = async (dispatch: any, id: string, payload: Question[]) => {
    TestAction.setLoading(dispatch, true);
    return new Promise((resolve, reject) => TestRepository.submitTest(id, payload).then(async (result: AxiosResponse<Test>) => {
      await dispatch({type: TestAction.type.submitAssessment, payload: result.data});
      resolve(result.data);
    }).catch(async (error) => {
      await dispatch({type: TestAction.type.error, payload: error});
      console.log(`check de console ${error}`);
      reject(error);
    })).finally(() => TestAction.setLoading(dispatch, false));
  };

  static draftQuestionsBeforeToSend = (dispatch: any, payload: Question[]) => dispatch({type: TestAction.type.draftQuestions, payload});

}
