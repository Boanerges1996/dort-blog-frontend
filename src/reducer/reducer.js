const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const SIGNUP = "SIGNUP"
const COMMENTS = "COMMENTS"
const SINGLE_BLOG = "SINGLE_BLOG"
const BLOGS = "BLOGS"



const initStore = {
    user:{
        logged:false,
        verified:false,
        invalid:false,
        exist:true
    },
    blogs:[],
    comments:[],
    signupExist:false,
    selectedBlog:{}
}

const rootReducer = (state=initStore,action)=>{
    if(action.type===LOGIN){
        return {
            ...state,
            user: action.data
        }
    }
    else if(action.type===SIGNUP){
        return {
            ...state,
            user: action.data
        }
    }
    else if(action.type===LOGOUT){
        return {
            ...initStore
        }
    }
    else if(action.type==="EXISTS"){
        return {
            ...state,
            signupExist:action.data
        }
    }
    else if(action.type===BLOGS){
        return {
            ...state,
            blogs:action.data
        }
    }
    else if(action.type===SINGLE_BLOG){
        return {
            ...state,
            selectedBlog:action.data
        }
    }
    else if(action.type===COMMENTS){
        return {
            ...state,
            comments:action.data
        }
    }
    return state
}

export default rootReducer