import { Button, Container, Paper, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme=>({
  mainDiv:{
    marginTop:theme.spacing(10),
    // height:'300px'
  },
  regAc:{
    textAlign:'center',
    fontSize:'30px'
  },
  lineOne:{
    textAlign:'center',
    marginTop:theme.spacing(2)

  },
  username:{
    marginBottom:theme.spacing(1)
  },
  btnReg:{
    textAlign:'center',
    marginTop:theme.spacing(3),
    paddingBottom:theme.spacing(3)
  }
}))

const RegisterPage = () => {
    const classes = useStyles()
  return (
    <Container>
    <Paper elevation={24} className={classes.mainDiv}>
      <div className={classes.regAc}>
        <div>
          <strong>Register Account</strong>
        </div>
      </div>
      <form>
      <div className={classes.lineOne}>
      <div className={classes.username}>
      <TextField
          id="outlined-password-input"
          label="Full Name"
          type="text"
        />
        </div>
        <div className={classes.password1}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
      </div>
      <div className={classes.lineOne}>
      <div className={classes.username}>
      <TextField
          id="outlined-password-input"
          label="Repeat Password"
          type="password"
        />
        </div>
        <div className={classes.password1}>
        <TextField
          id="outlined-password-input"
          label="E-mail"
          type="email"
        />
        </div>
      </div>
      <div className={classes.lineOne}>
      <div className={classes.username}>
      <TextField
          id="outlined-password-input"
          label="Mobile No."
          type="text"
        />
        </div>
        <div className={classes.password1}>
        <label htmlFor="">Date of Birth</label><br />
        <TextField
          id="outlined-password-input"
          type="date"
          sx={{width:'250px'}}
        />
        <div>
        <input type="checkbox" name="" id=""  checked/>
        <label htmlFor="">Need Promotonal Message?</label>
        </div>
        </div>
      </div>
      <div className={classes.btnReg}>
        <Button type='submit' size='large' variant='contained'>Register</Button>
      </div>
      </form>
    </Paper>
    </Container>
  )
}

export default RegisterPage