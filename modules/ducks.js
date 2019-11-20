/*
1. home.js
selectedSketch(스케치버튼 클릭 후 가져온 사진의 uri)
selectedPattern(패턴버튼 클릭 후 가져온 패턴 사진의 uri 또는 RGB 색상 코드)
mode(추천을 받는지 안 받는지)
category(가방, 신발, 모자 등)
2. Sketch.js
selectedPicture(선택된 스케치 사진의 uri, 카메라랑 앨범 중 어느것을 선택해도 이 변경되는건 이 변수)
3. Pattern.js
selectedResult(앨범에서 패턴 사진을 고를 시 해당 사진의 uri를 담거나 팔레트에서 받아온 색상 코드를 담음)
4. Palette.js
newColor(사용자가 선택한 새로운 컬러 코드)
oldColor(사용자가 이전에 선택했던 컬러 코드)
5. ProgressBarComponent.android.js
prograssStatus(transform 진행 상황에 따라 업데이트 되어 프로그레스 바에 반영 될 진행률)
6. transpose.js
resultPicture(완성된 결과물 사진을 받아올 변수)
recommend1(추천 제품 사진 1)
recommend2(추천 제품 사진 2)
recommend3(추천 제품 사진3)
추가 구현 사항
myHistory.js (사용자가 지금까지 만든 사진들 모아놓는곳)
userName(화면에 띄울 사용자 이름), userInfo(사용자 정보)

login.js (로그인하는 화면)
userName
*/

import { createAction, handleActions } from 'redux-actions';
import { toHsv } from 'react-native-color-picker';
import types from './types';

export const init = createAction(types.INIT);
export const setSketch = createAction(types.SET_SKETCH);
export const setPattern = createAction(types.SET_PATTERN);
export const setOldColor = createAction(types.SET_OLDCOLOR);
export const setColor = createAction(types.SET_COLOR);
export const setProgress = createAction(types.SET_PROGRESS);
export const setResult = createAction(types.SET_RESULT);
export const setRecommend = createAction(types.SET_RECOMMEND);
export const setToken = createAction(types.SET_TOKEN);
export const setCategory = createAction(types.SET_CATEGORY);

const baseState = {
    sketch      : '  파일명',
    pattern     : '  파일명or색상코드',
    mode        : 'color',
    oldColor    : '#000000',
    color       : toHsv('red'),
    progress    : 0,
    result      : '',
    recommend   : [],
    token       : '',
    category    : 'bag',
};

export default handleActions({
    [types.INIT]            : ( state, action ) => { return state },
    [types.SET_SKETCH]      : ( state, action ) => { return state.set('sketch', action.payload) },
    [types.SET_PATTERN]     : ( state, action ) => { return state.set('pattern', action.payload) },
    [types.SET_MODE]        : ( state, action ) => { return state.set('mode', action.payload) },
    [types.SET_OLDCOLOR]    : ( state, action ) => { return state.set('oldColor', action.payload) },
    [types.SET_COLOR]       : ( state, action ) => { return state.set('color', action.payload) },
    [types.SET_PROGRESS]    : ( state, action ) => { return state.set('progress', action.payload) },
    [types.SET_RESULT]      : ( state, action ) => { return state.set('result', action.payload) },
    [types.SET_RECOMMEND]   : ( state, action ) => { return state.set('recommend', action.payload) },
    [types.SET_TOKEN]       : ( state, action ) => { return state.set('token', action.payload) },
    [types.SET_CATEGORY]    : ( state, action ) => { return state.set('category', action.payload) },
}, baseState);

////////////////////////////////////////////////
// Template
// 여기서 필요한 변수/함수들 뽑아가세요
////////////////////////////////////////////////

/*

const mapStateToProps = (state) => ({
    sketch      : state.sketch,
    pattern     : state.pattern,
    mode        : state.mode,
    oldColor    : state.oldColor,
    color       : state.color,
    progress    : state.progress,
    result      : state.result,
    recommend   : state.recommend,
    token       : state.token,
    category    : state.category,
})

const mapDispatchToProps = (dispatch) => ({
    setSketch   : (data) => dispatch(actions.setSketch(data)),
    setPattern  : (data) => dispatch(actions.setPattern(data)),
    setOldColor : (data) => dispatch(actions.setOldColor(data)),
    setColor    : (data) => dispatch(actions.setColor(data)),
    setProgress : (data) => dispatch(actions.setProgress(data)),
    setResult   : (data) => dispatch(actions.setResult(data)),
    setRecommend: (data) => dispatch(actions.setRecommend(data)),
    setToken    : (data) => dispatch(actions.setToken(data)),
    setCategory : (data) => dispatch(actions.setCategory(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)();

*/