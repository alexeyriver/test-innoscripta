import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const preloadedState = localStorage.getItem("state") || "{}";
const store = createStore(
  reducer,
  JSON.parse(preloadedState),
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});
export default store;
