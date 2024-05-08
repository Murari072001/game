import { createStore, combineReducers } from "redux";
import UserReducer from "../features/userReducer";

let store=new createStore(combineReducers({
    user:UserReducer
}))

export default store