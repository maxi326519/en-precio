import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export interface RootState {
  // States
}

export type MyThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
>;
