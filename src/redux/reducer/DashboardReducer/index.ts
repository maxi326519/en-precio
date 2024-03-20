import { initDashboardState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const DashboardReducer = (
  state = initDashboardState(),
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
