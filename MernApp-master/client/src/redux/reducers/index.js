import { combineReducers } from "redux";
import authReducer  from './authReducers'
import postReducers from './postReducers'



export default combineReducers ({authReducer , postReducers})