export default function(state={}, action){
    switch(action.type){
        case 'LOGIN': 
            return {...state, login: action.payload}
        default:
            return state;
    }
}