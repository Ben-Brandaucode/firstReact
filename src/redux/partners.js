import * as ActionTypes from './ActionTypes';
import {PARTNERS } from '../shared/partners';
export const Partners = (state= PARTNERS, action) => {
    switch (action.type){
        case ActionTypes.ADD_PARTNERS:
            return(... state,errMess:null, partners: action.payload};
        case ActionTypes.PARTNERS_LOADING:
            return(...state,)
        case ActionTypes.PARTNERS_FAILED:
            return (... state,isLoading:false, errMess:action.payload<)
        
    default: 
        return state;
    }
}  