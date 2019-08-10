import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import company from './reduser';

const rootReducer = combineReducers({
    company,
    form: formReducer
})

export default rootReducer;