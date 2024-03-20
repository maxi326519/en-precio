import { initPropertyState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const PropertiesReducer = (
  state = initPropertyState(),
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
