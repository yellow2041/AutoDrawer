import types from './types';

// 다 같은 함수인데, 나중에 바꿀 필요가 있을 때를 대비해 다 써둠

setName = name => {
    return {
        type: types.SET_NAME,
        data: name,
      };
}

setImage = image => {
    return {
        type: types.SET_IMAGE,
        data: image,
    }
}

setMode = mode => { // parameter 'get_recommendation' changed to mode
    return {
        type: types.SET_MODE,
        data: mode,
    }
}

setType = content_type => {
    return {
        type: types.SET_TYPE,
        data: content_type,
    }
}

setCategory = category => {
    return {
        type: types.SET_CATEGORY,
        data: category,
    }
}

setToken = token => {
    return {
        type: types.SET_TOKEN,
        data: token,
    }
}
