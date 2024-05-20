import {createStore} from "redux"
import { rootReducers } from "./rootReducer"
export const store=createStore(rootReducers)