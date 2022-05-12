import React, { Component } from 'react'
import './ForgetEmail.css'
import { IconButton, Snackbar, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import { ResetService } from '../../Services/UserService';

export class ForgetEmail extends Component {
  
    constructor(props) {
        super(props);
        this.emailHandler = this.emailHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
        this.state = {

          emailError: "",
          email : ""
        
        }
      }

 emailHandler(event){
  let email = event.target.value;
  let regexEamil = new RegExp('^[A-Z a-z]+[a-z 0-9]+[@]{1}[a-z]*[.]{1}[a-z 0-9]*');
  if (!regexEamil.test(email)) {
    this.setState(
      {
        emailError: "email is incorrect"
      }
    )
  }
  else{
    this.setState(
        {
          email: event.target.value,
          emailError: ""
        }
      )

  }
}

    SnackbarClose() {
      this.setState(
        {
          SnackbarOpen: false
        }
      )
    }


    submitHandler = async ()=>{
      let data = {
        email : this.state.email
    }
    
       await ResetService(data).then((res)=>{
          console.log('res',res);
          this.setState({
            SnackbarOpen : true,
            SnackbarMessage : res.data.message
          })
       })
       .catch((error) =>{
        console.log(error);
        this.setState({
          SnackbarOpen : true,
          SnackbarMessage : error.message
        })
      });
    }




  render() {
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
                                <h4 >Find your email</h4>
                                </div>
                                <div className="subParagraphContent">
                                    Enter your Recovery Email
                                </div>
                                <div className="emailContent">
                                <TextField id="Email_id" variant="standard" placeholder='Email'  onChange={this.emailHandler} helperText={this.state.emailError} fullWidth required/>
                                </div>
                                <div className="bottomContent">
                                <Button className="txtbtn" onClick={() =>this.submitHandler()}  variant="contained">Next</Button>
                                </div>
                                <div className="BackButton">
                                <Link to="/">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightContent"></div>
                    <Snackbar 
            anchorOrigin={{vertical : 'botton',horizontal :"left"}} 
             open ={this.state.SnackbarOpen} autoHideDuration={3000} 
             message ={<span id="message-id">{this.state.SnackbarMessage}</span>}
            action={[
               <IconButton key="close"  color ="inherit"  onClick={() =>this.SnackbarClose()} aria-label='Close' > X </IconButton>

             ]
             }
            />
                </div>

        </div>

    )
  }
}

export default ForgetEmail
