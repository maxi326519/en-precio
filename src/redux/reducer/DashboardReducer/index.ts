import { initDashboardState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";
import { LOGOUT } from "../../actions/sesion";

export const DashboardReducer = (
  state = initDashboardState(),
  action: AnyAction
) => {
  switch (action.type) {
    case LOGOUT:
      return initDashboardState();

    default:
      return state;
  }
};
