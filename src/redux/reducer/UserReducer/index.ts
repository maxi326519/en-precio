import { LOGIN, LOGOUT, SIGN_IN, UPDATE_EMAIL } from "../../actions/sesion";
import { CREATE_COMPANY } from "../../actions/company";
import { initUserState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const UserReducer = (state = initUserState(), action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;

    case LOGIN:
      return action.payload;

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case CREATE_COMPANY:
      return {
        ...state,
        companyId: action.payload.id,
      };

    case LOGOUT:
      return initUserState();

    default:
      return state;
  }
};
