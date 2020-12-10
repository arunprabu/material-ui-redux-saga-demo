import React from 'react';
import { AppBar, Button, ButtonGroup, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Link, useHistory  } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkBtn: {
      textDecoration: 'none', 
      marginRight: '10px'
    }
  }),
);

export const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const routeChangeHandler = (url: string) =>{ 
    history.push(url);
  }

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material Demo App
          </Typography>
          
          <Typography>
            <Link to='/' className={classes.linkBtn}>
              <Button variant="contained" color="default">Home</Button>
            </Link>
            <Link to='/posts' className={classes.linkBtn}>
              <Button variant="contained" color="default">Posts</Button>
            </Link>
            <Link to='/about' className={classes.linkBtn}>
              <Button variant="contained" color="default">About</Button>
            </Link>
          </Typography>

          <Button color="inherit" onClick={routeChangeHandler.bind(this, 'about')}>About via Button</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}
