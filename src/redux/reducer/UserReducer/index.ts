import { initUserState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const UserReducer = (state = initUserState(), action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
