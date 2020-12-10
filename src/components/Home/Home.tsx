import React from 'react';
import { Container, Grid, Typography, Paper, Button} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Home = () => {
  const classes = useStyles();


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" component="h3" gutterBottom>
              Welcome to My <br />React + TS + Material UI + Redux + Saga App!
            </Typography>
            <Link to='/posts'>
              <Button variant="contained" color="primary">View Posts</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
