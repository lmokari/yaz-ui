import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import company from './reduser';
import auth from './auth'

const rootReducer = combineReducers({
    auth,
    company,
    form: formReducer
})

export default rootReducer;