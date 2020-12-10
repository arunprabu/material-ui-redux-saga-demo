import React, { useReducer, useState } from 'react';
import { Button, createStyles, Icon, makeStyles, Theme} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

const About = () => {
  const classes = useStyles();
  
  let [formData, setFormData] = useState({});

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log(formData);
  }
    
  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setFormData({
      ...formData,
      [name]: newValue
    });

    console.log(formData);
  };
  
  return (
    <div>
      <h1>About us</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          id="margin-normal"
          name="name"
          className={classes.textField}
          helperText="Enter your full name"
          onChange={handleInput}
        />
        <TextField
          label="Email"
          id="margin-normal"
          name="email"
          className={classes.textField}
          helperText="e.g. name@gmail.com"
          onChange={handleInput}
        />
        <br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button} onClick={handleSubmit}
        >
          Submit <Icon className={classes.rightIcon}>Submit</Icon>
        </Button>
      </form>
    </div>
  )
}

export default About
