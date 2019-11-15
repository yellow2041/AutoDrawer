import { combineReducers } from 'redux';
import sketchReducer from './sketchReducer';
import patternReducer from './patternReducer';
import metadataReducer from './metadataReducer'

export default combineReducers(Object.assign({},{
    sketch: sketchReducer,
    pattern: patternReducer,
    metadata: metadataReducer,
}));