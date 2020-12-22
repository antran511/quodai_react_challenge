
//Fetching issues actions
export const fetchIssues = (page) => async dispatch => {
    dispatch({ type: "FETCH_ISSUES_REQUEST" });
    fetch(`https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`)
        .then(response => response.json())
        .then(data => dispatch({ type: "FETCH_ISSUES_SUCCESS", data }))
        .catch(error => dispatch({ type: "FETCH_ISSUES_FAILURE", error}))
}

export const highlightIssue = (issue) => {
    return {
        type: 'HIGHLIGHT_ISSUE',
        data: issue
    };
} 

export const unhighlightIssue = () => {
    return {
        type: 'UNHIGHLIGHT_ISSUE',
    };
} 

