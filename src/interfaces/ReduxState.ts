import { useDispatch as useReduxDispatch } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Company, initCompany } from "./Company";
import { initUser, User } from "./User";
import { AnyAction } from "redux";
import { Property } from "./Property";

export type MyThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
>;

// Config Thunk
export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;
export function useDispatch(): AppDispatch {
  return useReduxDispatch<AppDispatch>();
}

export type UserState = User;
export type CompanyState = Company;
export type PropertyState = Property[];
export type DashboardState = {
  users: User[];
  properties: Property[];
};

export interface RootState {
  loading: boolean;
  user: UserState;
  company: CompanyState;
  property: Property[];
  dashboard: DashboardState;
}

export const initUserState = (): UserState => initUser();
export const initCompanyState = (): CompanyState => initCompany();
export const initPropertyState = (): PropertyState => [];
export const initDashboardState = (): DashboardState => ({
  users: [],
  properties: [],
});
