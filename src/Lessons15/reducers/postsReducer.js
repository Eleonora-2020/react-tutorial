import { } from '../actions';

export default (state = [], actions) => {
    //sbagliata sintassi si usa switch
    // if (actions.type === 'FETCH_POST') {
    //     return actions.payload;
    // }
    // return state

    switch(actions.type){
        case 'FETCH_POST':
            return actions.payload;

        default:
            return state;
    }
}