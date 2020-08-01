import React from 'react';
import { FormGroup,FormControl,Button } from 'react-bootstrap';

//PostEditForm
const PostEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditPostForm" onSubmit={props.editPost}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
        <label> Title: </label>
         
          <input type="hidden" value={props.postData.id} name="id"/>
            <FormControl
              type="text" placeholder="Enter Title"
              name="postTitle" defaultValue={props.postData.postTitle}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
        <label>  Content:</label> 
                <FormControl
                  componentClass="textarea" placeholder="Enter Content"
                  name="postContent" defaultValue={props.postData.postContent}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup className="text-center">
              <Button type="submit" bsStyle="success" bsSize="large"  className="editBtn">Edit</Button>
          </FormGroup>
    </form>
  );
}

export default PostEditForm;
