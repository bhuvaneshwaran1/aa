import axios from 'axios';
import { toast } from "react-toastify";
//import {  useNavigate } from 'react-router-dom';



export const RegisterApi = (data) => {
    const headers = {
        headers: { "Content-Type": "application/json" },
        mode: 'cors'
      }
      return axios.post(`http://localhost:3030/users`,data,headers)
      .then(res => {
        toast.success("Registered succesfully", res)
        if(res.status === 200) return res 
        console.log(res)
      }).catch(err => {
        toast.error('Failed', err)
        console.log(err);
      })
}

export const loginApi = data => {
 
  const headers = {
    headers: { "Content-Type": "application/json" },
    mode:'cors'
  }

  return axios
    .post(`http://localhost:3030/login`, data, headers)
    .then(response => {
      if (response.status === 200) return response
      //navigate('/home');
      toast.success("Login succesfully", response)
    })
    .catch(err => {
      console.log(err)
      toast.error('Failed', err)
      return err;
      
    })
  }