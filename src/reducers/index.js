import {combineReducers} from 'redux';
import UserReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    user: UserReducer,
    form: formReducer
});
