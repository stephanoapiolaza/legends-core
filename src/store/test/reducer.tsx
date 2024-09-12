import TestAction from "./action";
import {StateType} from "./state";

const testReducer = (state: StateType, action: {payload: any, key: string, type: string}): StateType => {
  switch (action.type) {
    case TestAction.type.getAssessmentById: {
      return {...state, test: {...action.payload}, error: {enabled: false, message: ""}}
    }
    case TestAction.type.startAssessment: {
      return {...state, test: {...action.payload}, error: {enabled: false, message: ""}}
    }
    case TestAction.type.submitAssessment: {
      return {...state, test: {...action.payload}, error: {enabled: false, message: ""}}
    }
    case TestAction.type.draftQuestions: {
      return {...state, draftQuestions: [...action.payload], error: {enabled: false, message: ""}}
    }
    case TestAction.type.error: {
      return {...state, error: {enabled: true, message: action.payload}}
    }
    case TestAction.type.loading: {
      return {...state, loading: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

export default testReducer;
