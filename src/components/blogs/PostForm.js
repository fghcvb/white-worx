import React from 'react';
import { FormGroup,FormControl,Button } from 'react-bootstrap';

//PostForm
const PostForm = (props) => {
  return (
    <form  name="postForm" className="form form-horizontal"  id="addPostForm" onSubmit={props.addPost}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <label>Title:</label>
            <FormControl
              type="text" placeholder="Enter Title"
              name="postTitle"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <label>Content: </label>
                <FormControl
                  componentClass="textarea" placeholder="Enter Content"
                  name="postContent"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup className="text-center">
              <Button type="submit" bsStyle="success" bsSize="large" className="saveBtn">Save</Button>
          </FormGroup>
    </form>
  );
}

export default PostForm;
