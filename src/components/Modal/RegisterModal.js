import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { auth } from '../../firebase/config'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


function getModalStyle() {
  const top = 40
  return {
    top: `${top}%`,
    margin: 'auto',
    width: '25vw',
    zIndex: 2
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    zIndex: 3
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textField: {
    marginLeft: 50,
    marginRight: 50,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));
const RegisterModal = props => {
  const classes = useStyles();
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const register = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
      props.showRegister()
    }).catch(err => console.log(err))
  }
  return (
    <Modal open={props.show} style={getModalStyle()} >
      <Paper elevation={5} className={classes.container}>
        <form className={classes.form} noValidate autoComplete='off'>
          <Typography variant="h6" color="inherit" >Register</Typography>
          <TextField
            // required
            id="standard-required"
            label="Username"
            defaultValue=''
            className={classes.textField}
            margin="normal"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <TextField
            // required
            id="standard-password-input"
            label="Password"
            type="password"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <div>
            <Button onClick={props.showRegister}>Cancel</Button>
            <Button onClick={() => register(username, password)}>Submit</Button>
          </div>
        </form>
      </Paper>
    </Modal>
  )
}
export default RegisterModal
