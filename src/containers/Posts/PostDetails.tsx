import { Container, Grid, Paper } from '@material-ui/core';
import React, { Component } from 'react'

class PostDetails extends Component {

  render() {

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Paper>
              <h2>Post Details</h2>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default PostDetails;