//import jsonPlaceholder from '../apis/jsonPlaceholder';

/*export const fetchPosts = async () => {
  return function(dispatch, getState){
       const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
  };
   
};

*/

/*
export const fetchPosts = async () => {
    return async function(dispatch, getState){
         const response = await jsonPlaceholder.get('/posts');
  
    dispatch({type: 'FETCH_POSTS', payload: response})
    };
     
  };

  */

 import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get('/users/' + id)

    dispatch({ type: 'FETCH_USER', payload: response.data});
};
