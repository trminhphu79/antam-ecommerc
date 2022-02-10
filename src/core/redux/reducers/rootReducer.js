import { combineReducers } from "redux";

// Import Redcucers
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
});
