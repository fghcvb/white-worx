
//initialState
const INITIAL_STATE = {
    posts: [],
    post: null,
    isFetching: false,
    error: null,
    successMsg: null,
    showDeleteModal: false,
    showAddModal: false,
    postToDelete: null,
    showEditModal: false,
    postToEdit: null,
    newPost: null
}

//postReducer
export const postReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return {
                ...currentState,
                posts: [],
                post: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'FETCH_POSTS_SUCCESS':
            return {
                ...currentState,
                posts: action.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: action.message,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'FETCH_POSTS_FAILED':
            return {
                ...currentState,
                posts: [],
                post: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'FETCH_POST_REQUEST':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'FETCH_POST_SUCCESS':
            return {
                ...currentState,
                posts: currentState.posts,
                post: action.post,
                isFetching: false,
                error: null,
                successMsg: action.message,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'FETCH_POST_FAILED':
            return {
                ...currentState,
                posts: [],
                post: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
            }

        case 'ADD_NEW_POST_REQUEST':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: action.post
            }

        case 'ADD_NEW_POST_REQUEST_FAILED':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: true,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'ADD_NEW_POST_REQUEST_SUCCESS':
            const nextState = {
                ...currentState,
                posts: [...currentState.posts, action.post.data],
                post: null,
                isFetching: false,
                error: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: action.post,
                showAddModal: false
            }
 
            return nextState;

        case 'SHOW_POST_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showAddModal: true,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'HIDE_ADD_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showAddModal: false,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'SHOW_EDIT_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: true,
                postToEdit: action.post,
                newPost: null
            }

        case 'HIDE_EDIT_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'EDIT_POST_REQUEST':
   
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: true,
                postToEdit: action.post,
                newPost: null
                
            }

        case 'EDIT_POST_SUCCESS':
            const updatedPosts = currentState.posts.map((post) => {
                if(post){
                    if (post.id !== action.post.data.id) {
                        //This is not the item we care about, keep it as is
                        return post;
                    }
                }
                //Otherwise, this is the one we want to return an updated value
                return { ...post, ...action.post.data }
            })
            return {
                ...currentState,
                posts:updatedPosts,
                post: null,
                isFetching: false,
                error: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: action.post,
                newPost: null
            }

        case 'EDIT_POST_FAILED':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: true,
                postToEdit: currentState.postToEdit,
                newPost: null
            }

        case 'DELETE_POST_REQUEST':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: true,
                postToDelete: action.post,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'DELETE_POST_SUCCESS':
            const filteredPosts = currentState.posts.filter((post) => post.id !== currentState.postToDelete.id)
            return {
                ...currentState,
                posts: filteredPosts,
                post: null,
                isFetching: false,
                error: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }


        case 'DELETE_POST_FAILED':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: true,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'SHOW_DELETE_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showDeleteModal: true,
                postToDelete: action.post,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }

        case 'HIDE_DELETE_MODAL':
            return {
                ...currentState,
                posts: currentState.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                postToDelete: null,
                showEditModal: false,
                postToEdit: null,
                newPost: null
            }


        default:
            return currentState;

    }
}
