import {combineReducers} from 'redux';
import UserReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';
import movieReducer from './movie_reducer';

export default combineReducers({
    user: UserReducer,
    form: formReducer,
    movie: movieReducer
});
