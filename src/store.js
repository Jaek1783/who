import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Quest from "./Quest";
import Desc from "./Desc";
import thunk  from "redux-thunk";

const rootReducer = combineReducers({ Quest, Desc });
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
