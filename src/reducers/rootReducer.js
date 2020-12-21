import { combineReducers } from "redux";
import issueReducer from "./issue";

const rootReducer = combineReducers({
    issue: issueReducer,
});

export default rootReducer;