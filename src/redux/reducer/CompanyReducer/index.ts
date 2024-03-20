import { initCompanyState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const CompanyReducer = (
  state = initCompanyState(),
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
