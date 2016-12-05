export default function (state = {
    users: [],
    repos: [],
    fetching: false,
    fetched: false,
    fetchedRepos: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_USER_REPOS_FULFILLED":
            return { ...state, fetchedRepos: true, repos: [...state.repos, action.payload] }
        case "FETCH_USER_REPOS_ERROR":
            return {...state, fetchedRepos: false, users: [], repos: [], error: action.payload}
            break;
        case "USER_FETCHED":
            return {
                ...state,
                fetched:true,
                users: [...state.users, action.payload]
            }
        case "CLEAR_USERS":
            return {...state, users: [], repos: [], fetched:false}
    }
    return state
}