import { PropertiesReducer } from "./PropertiesReducer";
import { DashboardReducer } from "./DashboardReducer";
import { combineReducers } from "redux";
import { CompanyReducer } from "./CompanyReducer";
import { UserReducer } from "./UserReducer";
import { loadingReducer } from "./LoadingReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: UserReducer,
  company: CompanyReducer,
  properties: PropertiesReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
