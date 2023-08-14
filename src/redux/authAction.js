//import axios from 'axios';
//import { REGISTER_SUCCESS,LOGIN_SUCCESS } from '../redux/action'

//const BASE_URL = 'https://localhost:3030';

/* export const registerClick = (name, email, password, confirmPassword) => async (dispatch) => { */
/*   try { */
/*     const newUser = { name, email, password, confirmPassword }; */
/*     const response = await axios.post(`${BASE_URL}/users`, newUser); */
/*     dispatch({ */
/*       type: 'REGISTER_SUCCESS', */
/*       payload: response.data, */
/*     }); */
/*   } catch (error) { */
/*    */
/*     console.log('Error during registration:', error); */
/*   } */
/* }; */

/* export const loginClicker = (email, password) => async (dispatch) => { */
/*   try { */
/*     const newUser = { email, password }; */
/*     const response = await axios.post(`${BASE_URL}/login`, { */
/*       params: { email, password }, */
/*     }); */
/*  */
/*     if (response.data.length === 1) { */
/*       dispatch({ */
/*         type: 'LOGIN_SUCCESS', */
/*         payload: response.data[0], */
/*       }); */
/*     } else { */
/*       console.log('Login failed'); */
/*     } */
/*   } catch (error) { */
/*     console.log('Error during login:', error); */
/*   } */
/* }; */
/*  */
/* export const logout = () => (dispatch) => { */
/*   dispatch({ */
/*     type: 'LOGOUT', */
/*   }); */
/* }; */

/* export const registeruser = (params) => { */
/*   console.log("registeruser") */
/*  */
/*   return dispatch => { */
/*     console.log('user dispatch') */
/*  */
/*     axios.post(`http://localhost:3030/users`, {params}) */
/*     .then(response => { */
/*       console.log(response) */
/*     }) */
/*   } */
/* } */