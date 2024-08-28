import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";

// Slice reducers 

const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: [],
  // blacklist: [],
}

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});


export {
  rootReducer,
  rootPeristConfig,
}