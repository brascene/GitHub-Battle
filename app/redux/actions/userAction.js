import axios from 'axios'

export function addRepos(username) {
    return function(dispatch){
        axios.get("https://api.github.com/users/"+username+"/repos")
            .then((response)=>{
                dispatch({
                    type: "FETCH_USER_REPOS_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err)=>{
                dispatch({
                    type: "FETCH_USER_REPOS_ERROR",
                    payload: err
                })
            })
    }
}

export function addUser(username){
   return function(dispatch){
       axios.get("https://api.github.com/users/"+username)
           .then((response)=>{
            dispatch({
                type: "USER_FETCHED",
                payload: response.data
            })
           })
           .catch((err)=>{
            dispatch({
                type:"USER_FETCH_ERROR",
                payload:err
            })
           })
   }
}

export function clearUsers(){
    return {
        type: "CLEAR_USERS"
    }
}