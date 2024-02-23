import { AnyAction, Dispatch } from "redux";
import { MyThunkAction } from "../../../interfaces/ReduxState";

const EXAMPLE = "EXAMPLE";

export function example(): MyThunkAction {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      // Your code

      dispatch({
        type: EXAMPLE,
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error?.response?.data.error || error);
    }
  };
}
