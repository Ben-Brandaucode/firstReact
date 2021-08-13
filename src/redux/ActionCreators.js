import * as actionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';
import { Campsites } from './campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading =() => ({
    type: actionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess =>({
    type: actionTypes.CAMPSITES_FAILED,
    payload:errMess
});
export const addCampsites = campsites =>({
    type: actionTypes.ADD_CAMPSITES,
    payload:campsites
})