import { initPropertyState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";
import { LOGOUT } from "../../actions/sesion";

export const PropertiesReducer = (
  state = initPropertyState(),
  action: AnyAction
) => {
  switch (action.type) {
    case LOGOUT:
      return initPropertyState();

    default:
      return state;
  }
};
