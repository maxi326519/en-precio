import { PropertiesReducer } from "./PropertiesReducer";
import { DashboardReducer } from "./DashboardReducer";
import { combineReducers } from "redux";
import { CompanyReducer } from "./CompanyReducer";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  company: CompanyReducer,
  properties: PropertiesReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
