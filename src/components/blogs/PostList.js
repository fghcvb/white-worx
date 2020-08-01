import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../store/actions/postActions';
import { Alert, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import PostEditForm from './PostEditForm';
import PostForm from './PostForm';

//Home
class PostList extends Component {
    constructor(props) {
        super(props);
        this.hideAddModal = this.hideAddModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
        this.addPost = this.addPost.bind(this);
        this.submitEditPost = this.submitEditPost.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.cofirmDeletePost = this.cofirmDeletePost.bind(this);
    }

    // componentDidMount
    componentDidMount() {
        this.props.fetchPosts();
    }

    // Add posts data & popup
    showAddModal() {
        this.props.mappedshowAddModal();
    }

    hideAddModal() {
        this.props.mappedhideAddModal();
    }

    // addPost
    addPost(e) {
        e.preventDefault('addPost');
        const form = document.getElementById('addPostForm');
        if (form.postTitle.value !== "" && form.postContent.value !== "") {
            const data = {
                postTitle: form.postTitle.value,
                postContent: form.postContent.value
            }
            this.props.mappedAddPost(data);
            form.reset();
         
        }
        else {
            return;
        }
    }

    //Edit Popup and Data
    showEditModal(postToEdit) {
        this.props.mappedshowEditModal(postToEdit);
    }

    hideEditModal() {
        this.props.mappedhideEditModal();
    }

    //submitEditPost
    submitEditPost(e) {
        e.preventDefault();
        const editForm = document.getElementById('EditPostForm');
        if (editForm.postTitle.value !== "") {
            const data = {
                id: editForm.id.value,
                postTitle: editForm.postTitle.value,
                postContent: editForm.postContent.value
            }
            this.props.mappedEditPost(data);
        }
        else {
            return;
        }

    }

    //Delete Hide & Show Modal
    hideDeleteModal() {
        this.props.mappedhideDeleteModal();
    }

    showDeleteModal(postToDelete) {
        this.props.mappedshowDeleteModal(postToDelete);
    }

    cofirmDeletePost() {
        this.props.mappedDeletePost(this.props.mappedPostState.postToDelete);
    }


    render() {
        const bg = {
            overlay: {
                background: "red"
            }
        };
        //list the posts data
        const postState = this.props.mappedPostState;
        const posts = postState.posts;
        //Add popup and data
        const addPost = postState.newPost;
        //edit popup and data
        const editPost = postState.postToEdit;
        return (

            <div className="offset-md-3 col-md-6 postMarginB0ttom">
                <h4 className="text-center">Posts</h4>
                <div className="text-right mb-4"><Button onClick={() => this.showAddModal()} bsStyle="info" bsSize="xsmall" className="addPostBtn">Add Post</Button></div>

                {!posts && postState.isFetching &&
                    <p>Loading posts....</p>
                }
                {posts.length <= 0 && !postState.isFetching &&
                    <h4 className="text-center">No Posts Available.</h4>
                }
                {posts && posts.length > 0 && !postState.isFetching &&
                    <table className="table booksTable">
                        <thead>
                            <tr><th>Post</th><th className="textCenter">View</th><th className="textCenter">Edit</th><th className="textCenter" >Delete</th></tr>
                        </thead>
                        <tbody>
                            {posts.map((post, i) => <tr key={i}>
                                <td><strong>{post.postTitle}</strong></td>
                                <td className="textCenter"><Link to={'/post/' + post.id} style={{ textDecoration: 'none' }} ><span className="viewPostBtn">View</span></Link> </td>
                                <td className="textCenter"><Button onClick={() => this.showEditModal(post)} bsStyle="info" bsSize="xsmall" className="editPostBtn">Edit</Button></td>
                                <td className="textCenter"><Button onClick={() => this.showDeleteModal(post)} bsStyle="danger" bsSize="xsmall" className="delePostBtn">Delete</Button></td>



                            </tr>)
                            }
                        </tbody>
                    </table>
                }

                {/* Modal for Add post */}
                <Modal
                    show={postState.showAddModal}
                    onHide={this.hideAddModal}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    animation={false}
                >
                    <Modal.Header closeButton >
                        <Modal.Title id="contained-modal-title"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col-md-12">
                            {
                                <PostForm addPost={this.addPost} />
                            }
                            {addPost &&
                                <Alert bsStyle="success">
                                    Post <strong> {addPost.postTitle} </strong> Added Successfully
                                </Alert>
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideAddModal} className="closeBtn">Close</Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for editing todo */}
                <Modal
                    show={postState.showEditModal}
                    onHide={this.hideEditModal}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    animation={false}
                    styles={bg}
                >
                    <Modal.Header closeButton className="closeBtn">
                        <Modal.Title id="contained-modal-title"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="col-md-12">
                            {editPost &&
                                <PostEditForm postData={editPost} editPost={this.submitEditPost} />
                            }
                            {editPost && postState.isFetching && 
                                <Alert bsStyle="success">
                                    Post <strong> {editPost.postTitle} </strong>Updated Successfully
                                </Alert>     
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideEditModal} className="closeBtn">Close</Button>
                    </Modal.Footer>
                </Modal>


                {/* Modal for deleting post */}
                <Modal
                    show={postState.showDeleteModal}
                    onHide={this.hideDeleteModal}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title"></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {postState.postToDelete && !postState.isFetching &&
                            <Alert bsStyle="warning">
                                Are you sure you want to delete this post <strong>{postState.postToDelete.postTitle} </strong> ?
</Alert>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {!postState.successMsg && !postState.isFetching &&
                            <div>
                                <Button onClick={this.cofirmDeletePost}>Yes</Button>
                                <Button onClick={this.hideDeleteModal}>No</Button>
                            </div>
                        }
                        {postState.successMsg && !postState.isFetching &&
                            <Button onClick={this.hideDeleteModal} className="closeBtn">Close</Button>
                        }
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedPostState: state.postState
  
    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        fetchPosts: () => dispatch(postActions.fetchPosts()),
        mappedshowAddModal: () => dispatch(postActions.showAddModal()),
        mappedhideAddModal: () => dispatch(postActions.hideAddModal()),
        mappedAddPost: post => dispatch(postActions.addNewPost(post)),
        mappedEditPost: postToEdit => dispatch(postActions.editPost(postToEdit)),
        mappedshowEditModal: postToEdit => dispatch(postActions.showEditModal(postToEdit)),
        mappedhideEditModal: () => dispatch(postActions.hideEditModal()),
        mappedDeletePost: postToDelete => dispatch(postActions.deletePost(postToDelete)),
        mappedshowDeleteModal: postToDelete => dispatch(postActions.showDeleteModal(postToDelete)),
        mappedhideDeleteModal: () => dispatch(postActions.hideDeleteModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
