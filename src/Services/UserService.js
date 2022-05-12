import axios from 'axios';
import React from 'react'
import Box from '@mui/material/Box';

 export const UserService = (signUpData) => {

   
    try{
      const response =  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',signUpData)
        return response;
    }
    catch(error){
        return error;

    }

}


export const logInService = (logInData) => {

    // let data = {
    //     email : logInData.email,
    //     password :logInData.password
    // }
    try{
      const response =  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',logInData)
        return response;
    }
    catch(error){
        return error;

    }

}

export const ResetService = (Data) => {

    // let data = {
    //     email : logInData.email,
    //     password :logInData.password
    // }
    try{
      const response =  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',Data)
        return response;
    }
    catch(error){
        return error;

    }

}



export const ResetPasswordService = (Data,token) => {

    try{
      const response =  axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=`+token,Data)
        return response;
    }
    catch(error){
        return error;

    }

}





