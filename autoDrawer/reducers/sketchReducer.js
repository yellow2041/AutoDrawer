import types from '../actions/types';

const baseState = {
    name: '',
    uri: '',
}

export function sketchReducer(state = baseState, action) {
    switch(action.type){
    case types.SET_NAME:
        return Object.assign({}, state, {name: action.data});
    case types.SET_IMAGE:
        return Object.assign({}, state, {uri: action.data});
    default:
        return baseState;
    }
}