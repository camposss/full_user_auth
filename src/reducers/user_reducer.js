import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: ''
};

export default function (state= DEFAULT_STATE, action){
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_UP:
            return {auth: true, error: ''};
        case types.ERROR:
            return {auth:false, error: action.payload};
        default:
            return state;
    }
}