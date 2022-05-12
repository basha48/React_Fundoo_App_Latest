import { InputAdornment, TextField } from '@mui/material'
import React, { Component, useState } from 'react'
import { Button } from '@mui/material'
import { Link, useParams ,withRouter} from 'react-router-dom'
import './ForgetPassword.css'
import { ResetPasswordService } from '../../Services/UserService'
import { IconButton, Snackbar } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { OutlinedInput } from '@mui/material'




 const ForgetPassword1 = ()=>{
     const [state,Setstate] = useState({
        passwordError: "",
        password : "",
        showPassword :false, 
        SnackbarOpen : false
     });
  


    let   SnackbarClose =()=> {
        Setstate(
          {
            SnackbarOpen: false
          }
        
      )}

    let   passwordHandler = (event)=>{
          let password =  event.target.value;
          let regexpassword =   new RegExp('[A-Z ]*');
          if(!regexpassword.test(password)){
           Setstate(
              {
                passwordError : "password is incorrect"
              }
           
          )
          console.log(state.passwordError);
        }
          else{
            Setstate(
                {
                    password :event.target.value,
                    passwordError : ""
                }
            
              )}
      }

   let   handleClickShowPassword = () => {
        console.log("hello world");

          let passwordstate = this.state.showPassword;
          Setstate({
          showPassword: !passwordstate
        }
      )}

      let handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
 let submitHandler = async ()=>{
  let data = {
    newPassword :this.state.password
}

 let pathname = window.location.pathname;
let arraypath =  pathname.split('/');
 let token = arraypath[arraypath.length -1];
console.log(token);
   await ResetPasswordService(data,token).then((res)=>{
    let message
      console.log('res',res);
      if(res.status == 204){
       message = "Request was successful"
      // this.props.history.push('/login');
      }
      Setstate({
        SnackbarOpen : true,
        SnackbarMessage : message
      }
   )})
   .catch((error) =>{
    console.log(error);
    Setstate({
      SnackbarOpen : true,
      SnackbarMessage : error.message
    }
   ) });
}

     // const {id} = useParams();
      
     //console.log(parms.ma);
        return (
            <div className="mainContent">
                <div className="topContent"></div>
                    <div className="subContent">
                        <div className="leftContent"></div>
                        <div className="centerContent">
                            <div className="outerBroder">
                                <div className="form">
                                    <div className="Hearder"><h2>Fundoo</h2></div>
                                    <div className="paragraphContent">
                                    <h4 id="new_pass">Create New Password</h4>
                                    </div>
                                    {/* <div className="subParagraphContent">
                                        Enter New Password
                                    </div> */}
                                    <div className="PasswordContent">
                                      
                                    {/* <div className='onclicks' onClick={this.handleClickShowPassword}><i id='eye_icon' className="fa fa-eye" ></i></div> */}
                                    <TextField  type={state.showPassword ? 'text' : 'password'} id="password_id" variant="standard" placeholder='password' onChange={passwordHandler} helperText={state.passwordError} fullWidth required
                                   />

                                    </div>
                                    <div className="Conform_password">
                                    <TextField  type="password" id="conform_Password_id" variant="standard" placeholder='conform password'  fullWidth required/>
                                    </div>
                                    <div className="bottomContent">
                                    <Button className="txtbtn" onClick={() =>submitHandler()} variant="contained">submit</Button>
                                    </div>
                                    <div className="BackButton">
                                    <Link to="/">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightContent"></div>
                        <Snackbar 
            anchorOrigin={{vertical : 'bottom',horizontal :"left"}} 
             open ={state.SnackbarOpen} autoHideDuration={3000} 
             message ={<span id="message-id">{state.SnackbarMessage}</span>}
            action={[
               <IconButton key="close"  color ="inherit"  onClick={() =>SnackbarClose} aria-label='Close' > X </IconButton>

             ]
             }
            />
                    </div>
               
            </div>
    
        )
      }



export default  ForgetPassword1;