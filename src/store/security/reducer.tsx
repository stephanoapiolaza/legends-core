import AssessmentAction from "./action";
import {StateType} from "./state";

const securityReducer = (state: StateType, action: {payload: any, key: string, type: string}): StateType => {
  switch (action.type) {
    case AssessmentAction.type.login: {
      return {...state, logged: {...action.payload}, error: {enabled: false, message: ""}}
    }
    case AssessmentAction.type.reset: {
      return {...state, logged: { user: undefined, access_token: '', scopes: undefined }, error: {enabled: false, message: ""}}
    }
    case AssessmentAction.type.error: {
      return {...state, error: {enabled: true, message: action.payload}}
    }
    case AssessmentAction.type.loading: {
      return {...state, loading: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

export default securityReducer;
