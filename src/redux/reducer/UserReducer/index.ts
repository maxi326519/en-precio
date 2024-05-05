import { LOGIN, LOGOUT, SIGN_IN, UPDATE_EMAIL } from "../../actions/sesion";
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

    case LOGOUT:
      return initUserState();

    default:
      return state;
  }
};
