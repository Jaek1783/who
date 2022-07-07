import { createStore, combineReducers } from "redux";
import Quest from "./Quest";
import Desc from "./Desc";

const rootReducer = combineReducers({ Quest, Desc });

const store = createStore(rootReducer);

export default store;
