import { combineReducers } from "@reduxjs/toolkit";
import appData from './app-data/app-data'
import userData from './user-data/user-data'

const rootReducer = combineReducers({
  'AppData': appData,
  'UserData': userData
})

export default rootReducer
