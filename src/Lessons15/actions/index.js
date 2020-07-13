import jsonPlaceholder from '../apis/jsonPlaceholders';
import _ from 'lodash';


// export const fetchPost = async() => {
//     //Bad approach!!!! breaking the roles of redux!
//     const response = await jsonPlaceholder.get('/posts');

//     return{
//         type: 'FETCH_POST',
//     }
// }

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POST',
        payload: response.data
    });
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

//soluzione per non chiamare 80 volte una stessa API.
//Attenzione questo modo chiama solo una volta l'API quindi se ci sono delle modifiche
//all'utente non le posso vedere
export const fetchUser1 = (id) => dispatch => _fetchUser(id, dispatch);
//private function
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPost());
    // const userId= _.uniq(_.map(getState().postsReducer, 'userId'));
    // console.log(userId);

    // userId.forEach(e => dispatch(fetchUser(e)))

    _.chain(getState().postsReducer)
        .map('userId')
        .uniq()
        .forEach(e => dispatch(fetchUser(e)))
        .value();
}