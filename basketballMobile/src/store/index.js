import {combineReducers} from "redux";
import { authorization } from "./reducers/auth";

export const reducer = combineReducers({
    authorization: authorization.reducer,
})
