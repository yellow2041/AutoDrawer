import types from '../actions/types';

const baseState = {
    token: '',
    mode: '',
    content_type: '',
    category: '',
}

export function metadataReducer(state = baseState, action) {
    switch(action.type){
    case types.SET_TOKEN:
        return Object.assign({}, state, {token: action.data});
    case types.SET_MODE:
        return Object.assign({}, state, {mode: action.data});
    case types.SET_TYPE:
        return Object.assign({}, state, {content_type: action.data});
    case types.SET_CATEGORY:
        return Object.assign({}, state, {category: action.data});
    default:
        return baseState;
    }
}