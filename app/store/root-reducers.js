import { combineReducers } from "redux";

import robot from "./robot/robot.reducer"

const rootReducer = combineReducers({robot});

export default rootReducer;
