import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
// import { combineReducers } from 'redux';

import product from "./product";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [
    "product"
  ]
  // version: 1,
  // migrate: (state) => Promise.resolve({}),
};

export default persistCombineReducers(persistConfig, {
  // export default combineReducers({
  product: product
});
