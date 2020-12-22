
//Define initial state for reducer
const initialState = {
    highlightedList: [],
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_NOTIFICATOIN" :
            const newList = state.highlightedList.length >= 5 ? state.highlightedList.slice(0, -1) : state.highlightedList
            return {
                highlightedList: [action.payload, ...newList]
            }
    
        default:
            return state;
    }
}

export default notificationReducer;