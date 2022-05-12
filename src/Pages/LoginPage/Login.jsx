
import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import { IconButton, Snackbar, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { logInService } from '../../Services/UserService';
class Login extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {

      email: "",
      password: "",
      emailText: "",
      passwordText: "",
      SnackbarOpen: false,
      SnackbarMessage: "",

    }
  }


  SnackbarClose() {
    this.setState(
      {
        SnackbarOpen: false
      }
    )
  }
  inputHandler(event) {
    let id = event.target.id;
    if (id == "email_id") {
      let email = event.target.value;
      let emailspan = document.getElementById('spanEmail');
      let regexEamil = new RegExp('^[A-Z a-z]+[a-z 0-9]+[@]{1}[a-z]*[.]{1}[a-z 0-9]*');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if (!regexEamil.test(email)) {
        emailspan.style.display = "block"
        this.setState(
          {
            emailText: "email is incorrect"
          }
        )
      }
      else {
        emailspan.style.display = "none"
        this.setState(
          {
            email: event.target.value,
            emailText: ""
          }
        )
      }

    }

    else if (id == "logIn_password") {
      let password = event.target.value;
      let regexpassword = new RegExp('[A-Z a-z 0-9]*');
      if (!regexpassword.test(password)) {
        this.setState(
          {
            passwordText: "password is incorrect"
          }
        )
      }
      else {
        this.setState(
          {
            password: event.target.value,
            passwordText: ""
          }
        )
      }

    }


  }


  submitHandler = async () => {
    let logInData = {
      email : this.state.email,
      password : this.state.password

    }
    await logInService(logInData).then((res) => {
      let messaage = "";
      if (res.status == 200) {
        messaage = "login sucessfull"
      }

      console.log('res', res);
      this.setState({
        SnackbarOpen: true,
        SnackbarMessage: messaage
      })
    })
      .catch((data) => {
        let errorMessage = "";
        if (data.response.status == 401)
          errorMessage = "invalid cradentials !";
        else
          errorMessage = "sign in failed";
        this.setState({
          SnackbarOpen: true,
          SnackbarMessage: errorMessage
        })
      });
  }



  render() {
    return (
      <div className='center'>
        <h1>Login</h1>
        <form method="post" >
          <div className="txt_field">
            <input id="email_id" type="text" onChange={this.inputHandler} required />
            <span></span>
            <label>Email</label>
          </div>
          <div id="spanEmail">
          <span><h5>enter valid email</h5></span>
          </div>
          
          <div className="txt_field">
            <input type="password" id="logIn_password" onChange={this.inputHandler} required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">
          <Link to="/ForgetEmail">Forgot Password?</Link>
          </div>
          <input type="button" value="Login" onClick={() =>this.submitHandler()} />
          <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{vertical : 'bottom',horizontal :"left"}} 
          open={this.state.SnackbarOpen} 
          message={<span id="message-id">{this.state.SnackbarMessage}</span>}
          action={[
            <IconButton key="close" color="inherit" onClick={() => this.SnackbarClose()} aria-label='Close' > X </IconButton>

          ]
          }
        />
            <div className="signup_link">
              Not a member?
              <Link to="/SignUp">Signup</Link>
              
            </div>
           

        </form>
       
      </div>
    )
  }
}

export default Login


