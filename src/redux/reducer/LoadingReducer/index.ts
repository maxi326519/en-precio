import { CLOSE_LOADING, LOADING } from "../../actions/loading";
import { AnyAction } from "redux";

export const loadingReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case LOADING:
      return true;

    case CLOSE_LOADING:
      return false;

    default:
      return state;
  }
};
