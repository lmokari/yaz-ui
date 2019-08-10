export default function(state={}, action){
    switch(action.type){
        case 'CHECK_PIP': 
            return {...state, add: action.payload}
        case 'COPY_TEMPLATE': 
            return {...state, copyTemplate: action.payload}
        case 'COPY_CUSTOM_PRICES': 
            return {...state, copyCustomPrice: action.payload}
        default:
            return state;
    }
}