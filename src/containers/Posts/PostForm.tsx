import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'

class PostForm extends Component {

  state = {
    formData: {
      title: '',
      body: ''
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state.formData);
  }

  handleInput = (e: any) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Add your Blog Post</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Post Title"
            id="margin-normal"
            name="title"
            helperText="Enter Post Title"
            onChange={this.handleInput}
          />
          <br /><br />
          <TextField
            label="Enter Post Content"
            id="margin-normal"
            name="body"
            helperText="Max 600 characters"
            onChange={this.handleInput}
          />
          <br/>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >Submit</Button>
        </form>
      </div>
    )
  }
}

export default PostForm;