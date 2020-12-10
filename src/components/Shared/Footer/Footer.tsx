import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer style={{ textAlign: 'center' }}>
      <hr />
      <div className={classes.root}>Copyright 2020 | Arun</div>
    </footer>
  )
}

export default Footer
