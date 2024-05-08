const initialValue = {
    Allusers:[],
    isLoggedIn:false,
    loginUser:{}
}

let UserReducer = (state = initialValue, action) => {

    if (action.type === 'register') {
        console.log("action",action);
        return { ...state, Allusers: [...state.Allusers,action.payload] }
    }
    if(action.type==="login"){
        return {...state, isLoggedIn:true, loginUser:{...action.payload}}
    }
    if(action.type==="logout")
        {
            return {...state, isLoggedIn:false, loginUser:{}}
        }
    return state
}

export default UserReducer