
import axios from 'axios';

// Post Actions
export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_POST'
  }
}

//Add Post 
export const addNewPost = (post) => {
  return dispatch => {
   dispatch(addNewPostRequest(post));
    return axios.post('https://blogdb1.herokuapp.com/posts', post
    )
      .then(res => {
        dispatch(addNewPostRequestSuccess(res))
        if (res.error) {
          throw (res.error);
        }
     
      })
      .catch(error => {
        dispatch(addNewPostRequestFailed(error))
      })
  }
}

export const addNewPostRequest = (post) => {
  return {
    type: 'ADD_NEW_POST_REQUEST',
    post
  }
}

export const addNewPostRequestSuccess = (post, message) => {
  return {
    type: 'ADD_NEW_POST_REQUEST_SUCCESS',
    post: post,
    message: message
  }
}

export const addNewPostRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_POST_REQUEST_FAILED',
    error
  }
}

export const showAddModal = () => {
  return {
    type: 'SHOW_POST_MODAL'
  }
}

export const hideAddModal = () => {
  return {
    type: 'HIDE_ADD_MODAL'
  }
}

//Fetch Post 
export const fetchPosts = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchPostsRequest());
    // Returns a promise
    return fetch('https://blogdb1.herokuapp.com/posts')
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchPostsSuccess(data));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchPostsFailed(error));
          })
        }
      })
  }
}

export const fetchPostsRequest = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  }
}

export const fetchPostsSuccess = (posts, message) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    posts: posts,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchPostsFailed = (error) => {
  return {
    type: 'FETCH_POSTS_FAILED',
    error
  }
}

//Fetch Post By Id
export const fetchPostById = (postId) => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    // Returns a promise
    return fetch('https://blogdb1.herokuapp.com/posts/' + postId)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchPostSuccess(data));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchPostFailed(error));
          })
        }
      })

  }
}

export const fetchPostRequest = () => {
  return {
    type: 'FETCH_POST_REQUEST'
  }
}

export const fetchPostSuccess = (post, message) => {
  return {
    type: 'FETCH_POST_SUCCESS',
    post: post,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchPostFailed = (error) => {
  return {
    type: 'FETCH_POST_FAILED',
    error
  }
}

// Edit Post
export const editPost = (post) => {
  return dispatch => {
    dispatch(editPostRequest(post));
    return axios.put('https://blogdb1.herokuapp.com/posts/' + post.id, {
      ...post
    })
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(editPostSuccess(res))
      })
      .catch(error => {
        dispatch(editPostFailed(error))
      })
  }
}

export const showEditModal = (postToEdit) => {
  return {
    type: 'SHOW_EDIT_MODAL',
    post: postToEdit
  }
}

export const hideEditModal = () => {
  return {
    type: 'HIDE_EDIT_MODAL'
  }
}

export const editPostRequest = (post) => {
  return {
    type: 'EDIT_POST_REQUEST',
    post
  }
}

export const editPostSuccess = (post, message) => {
  return {
    type: 'EDIT_POST_SUCCESS',
    post: post,
    message: message
  }
}

export const editPostFailed = (error) => {
  return {
    type: 'EDIT_POST_FAILED',
    error
  }
}

// Delete Post
export const deletePost = (post) => {
  return (dispatch) => {
    dispatch(deletePostRequest(post));
    return fetch('https://blogdb1.herokuapp.com/posts/' + post.id, {
      method: 'delete'
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deletePostSuccess(data));
        })
      }
      else {
        response.json().then(error => {
          dispatch(deletePostFailed(error));
        })
      }
    })

  }
}

export const deletePostRequest = (post) => {
  return {
    type: 'DELETE_POST_REQUEST',
    post
  }
}

export const deletePostSuccess = (message) => {
  return {
    type: 'DELETE_POST_SUCCESS',
    message: message
  }
}

export const deletePostFailed = (error) => {
  return {
    type: 'DELETE_POST_FAILED',
    error
  }
}

export const showDeleteModal = (postToDelete) => {
  return {
    type: 'SHOW_DELETE_MODAL',
    post: postToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type: 'HIDE_DELETE_MODAL'
  }
}
