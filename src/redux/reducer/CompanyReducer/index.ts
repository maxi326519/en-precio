import { initCompanyState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";
import { LOGOUT } from "../../actions/sesion";

export const CompanyReducer = (
  state = initCompanyState(),
  action: AnyAction
) => {
  switch (action.type) {
    case LOGOUT:
      return initCompanyState();

    default:
      return state;
  }
};
