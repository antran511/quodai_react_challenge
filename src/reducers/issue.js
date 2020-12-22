
//Define initial state for reducer
const initialState = {
    issueList: [],
    loading: false,
    error: ''
}

const issueReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_ISSUES_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_ISSUES_SUCCESS":
            return {
                ...state,
                loading: false,
                issueList: action.data,
            } 
        case "FETCH_ISSUES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            } 
        default:
            return state;
    }   
}

export default issueReducer;
