import setTemplateReducer from "./setTemplateReducer";
import setUserReducer from "./setUserReducer";
import setDataReducer from "./setDataReducer";
import setDatabaseReducer from "./setDatabaseReducer";
import { combineReducers } from "redux";
let rootReducer = combineReducers({
  template: setTemplateReducer,
  user: setUserReducer,
  data:setDataReducer,
  details:setDatabaseReducer,
});
export default rootReducer;
