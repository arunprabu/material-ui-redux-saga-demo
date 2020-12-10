import React, { useReducer, useState } from 'react';
import { Button, Container, Grid, Icon, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }),
);

const Home = () => {
  const classes = useStyles();


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            List
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
