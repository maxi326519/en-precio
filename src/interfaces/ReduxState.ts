import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { initUser, User } from "./User";
import { Company, initCompany } from "./Company";
import { Property } from "./Property";

export type MyThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
>;

export type UserState = User;
export type CompanyState = Company;
export type PropertyState = Property[];
export type DashboardState = {
  users: User[];
  properties: Property[];
};

export interface RootState {
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
