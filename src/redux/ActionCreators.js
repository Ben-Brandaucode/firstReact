import * as actionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});