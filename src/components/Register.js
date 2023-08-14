import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// { registerClick } from '../redux/authAction';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
//import { actionCreator } from '../redux/actionCreator';
import axios from 'axios';
const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  

  const config = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
  }

  const dataforRegister = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  }

  const registerClick = async (e) => {
    e.preventDefault();
    if (name.trim() === '' ) {
      // Input is empty
      alert('Input is empty!');
      return;
  }
  // Input is not empty
  console.log('Input is not empty:', name);
   
    await axios.post(`http://localhost:3030/users`, dataforRegister, config)
      .then((res) => {
        if (res.status === 201) {
           navigate('/login')
          //dispatch(actionCreator(res))
          toast.success("Registered succesfully", res)
         
        }
      })
      .catch(err => {
        if(err.response)
        console.log(err.response)
        toast.error('Failed', err)
        //navigate('/')
      })
  }


  return (
    <div className='registerpage'>
      <h2>Register Page</h2>
     {/*  <form className="Auth-form" > */}
     {/*    <div className="Auth-form-content"> */}

     {/*      <div className="form-group mt-3"> */}
     {/*        <label htmlFor=''>Name</label> */}
     {/*        <input type="text" placeholder='Name' className="form-control mt-1" value={name} onChange={(e) => setName(e.target.value)} required /> */}
     {/*      </div> */}
     {/*      <div className="form-group mt-3"> */}
     {/*        <label htmlFor=''>Email</label> */}
     {/*        <input type='text' placeholder='Email' className="form-control mt-1" value={email} onChange={(e) => setEmail(e.target.value)} required /> */}
     {/*      </div> */}
     {/*      <div className="form-group mt-3"> */}
     {/*        <label htmlFor=''>Password</label> */}
     {/*        <input type="text" required placeholder='Password' className="form-control mt-1"  className='inputboxes' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
     {/*      </div> */}
     {/*      <div className="form-group mt-3"> */}
     {/*        <label htmlFor=''>Confirm Password</label> */}
     {/*        <input type="text" required placeholder='Confirm Password' className="form-control mt-1"  className='inputboxes'  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}
     {/*      </div> */}
     {/*      <div className="d-grid gap-2 mt-3"> */}
     {/*        <button className="btn btn-primary" onClick={registerClick}   className='btn-class'  >Register</button> */}
     {/*      </div> */}
     {/*      <h6 className='text-spaces'>Already Registerd? <Link to="/login" >Login</Link></h6> */}
     {/*    </div> */}
     {/*  </form> */}
    </div>
  )
}

export default Register;
