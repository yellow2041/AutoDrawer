import { toHsv } from "react-native-color-picker";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Types

types = {
    SET: 'SET',
}

// Reducers

sketchReducer = (state, action) => {
    if (typeof state === 'undefined') return null;

    switch(action.type){
    case 'SET':
        return action.data;
    }
    
    return null;
}

patternReducer = (state, action) => {
    if (typeof state === 'undefined') return null;
    
    switch(action.type) {
        case 'SET':
            return action.data;
    }
    
    return null;
}

metadataReducer = (state, action) => {
    if (typeof state === 'undefined') return null;

    switch(action.type) {
        case 'SET':
            return action.data;
    }

    return null;
}

// Actions

setName = name => {
    return {
        type: types.SET,
        data: name,
      };
}

setImage = image => {
    return {
        type: types.SET,
        data: image,
    }
}

setMode = mode => { // parameter 'get_recommendation' changed to mode
    return {
        type: types.SET,
        data: mode,
    }
}

setType = content_type => {
    return {
        type: types.SET,
        content_type: content_type,
    }
}

setCategory = category => {
    return {
        type: types.SET,
        category: category,
    }
}

