import { combineReducers } from "redux";
import { workersReducer } from "./reducers/workers/workersReducer";

const rootReducer = combineReducers({
	workers: workersReducer,
});

export default rootReducer;
