//takes COMMENTS and loadss tthem into Comment state and an action of ADD_COMMENT
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();  //what is ISOString?
            return state.concat(comment);
        default:
            return state;
    }
};