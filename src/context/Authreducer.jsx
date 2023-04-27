const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN":{
            return {
                activeUser: action.payload,
            };
        }
        
        case "LOGOUT":{
            return {
                activeUser: null,
            };
            
        }
        default:
            return state;

    }
}

export default AuthReducer;