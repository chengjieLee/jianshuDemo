import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    isFocus: false,
    mouseIn:false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('isFocus', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('isFocus', false);   
    }
    if(action.type === constants.CHANGE_LIST){
        return state.merge({
            'list': action.data,
            'totalPage':action.totalPage
    });
    }

    if(action.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',true);
    }

    if (action.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn', false);
    }

    if (action.type === constants.CHANGE_ITEM){
        return state.set('page',action.page)
    }
    return state;
}