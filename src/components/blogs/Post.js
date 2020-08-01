import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../store/actions/postActions';

//Post Detail 
class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let URLParams = this.props.match.params.id || {};
        this.props.mappedfetchPostById(URLParams);
    }

    render() {
        const postState = this.props.mappedPostState;
        return (
       
            <div className="text-center">
                <h4 className="text-center">Post Detail</h4>
                {!postState.post && postState.isFetching &&
                    <div>
                        <p>Loading post....</p>
                    </div>
                }
                {postState.post && !postState.isFetching &&
                    <div>
                        <h3>{postState.post.postTitle}</h3>
                        <p>{postState.post.postContent}</p>
                    </div>
                }
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
        mappedfetchPostById: postId => dispatch(postActions.fetchPostById(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
