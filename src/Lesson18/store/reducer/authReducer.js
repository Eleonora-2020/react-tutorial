import {SIGN_IN, SIGN_OUT} from '../action/types'

//il capitalize si usa per dire di non modificare il valore all'interno della variabile
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.userId
            }
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null
            }
        default:
            return state
    }
}