import React from 'react';
import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import PostForm from '../../containers/Posts/PostForm';
import PostList from '../../containers/Posts/PostList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Posts = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
            <PostForm />
          </Paper>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
            <PostList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
  
}

export default Posts;
