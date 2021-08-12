import { createStore, combineReducers } from "redux";
import repoReducer from "./reducers/repoReducer";

const rootReducer = combineReducers({
  repoReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
