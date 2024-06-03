import { CompanyState, initCompanyState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";
import { LOGOUT } from "../../actions/sesion";
import {
  CREATE_COMPANY,
  DELETE_COMPANY,
  GET_COMPANY,
  UPDATE_COMPANY,
} from "../../actions/company";

export const CompanyReducer = (
  state: CompanyState = initCompanyState(),
  action: AnyAction
) => {
  switch (action.type) {
    case LOGOUT:
      return initCompanyState();

    case CREATE_COMPANY:
      return action.payload;

    case GET_COMPANY:
      return action.payload;

    case UPDATE_COMPANY:
      return action.payload;

    case DELETE_COMPANY:
      return action.payload;

    default:
      return state;
  }
};
