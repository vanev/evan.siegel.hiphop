import { combineReducers } from "redux"
import resume from "./resume/reducer.js"

const root = combineReducers({
  resume,
  portfolio: (state={}) => state,
})

export default root
