import { combineReducers } from "redux";
import issueReducer from "./issue";
import notificationReducer from "./notification";


const rootReducer = combineReducers({
    issue: issueReducer,
    notification: notificationReducer
});

export default rootReducer;
