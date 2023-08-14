/* const initialState = { */
/*     user: [], */
/*     isAuthenticated: false, */
/*   }; */
/*    */
/*   const reducer = (state = initialState, action) => { */
/*     switch (action.type) { */
/*       case 'REGISTER_SUCCESS': */
/*         return { */
/*             ...state, */
/*             user: action.payload, */
/*             isAuthenticated: true, */
/*           }; */
/*       case 'LOGIN_SUCCESS': */
/*         return { */
/*           ...state, */
/*           user: action.payload, */
/*           isAuthenticated: true, */
/*         }; */
/*       case 'LOGOUT': */
/*         return { */
/*           ...state, */
/*           user: null, */
/*           isAuthenticated: false, */
/*         }; */
/*       default: */
/*         return state; */
/*     } */
/*   }; */
/*    */
/*   export default reducer; */

/* import { Types } from "./actionTypes"; */
/*  */
/* const initialState = { */
/*   user:{}, */
/*   isAuthenticated: false */
/* } */
/*  */
/* const reducer = (state = initialState, action) => { */
/*   console.log(state,"UUUUUUUU") */
/*   switch(action.type) { */
/*     case Types.REGISTER_SUCCESS : */
/*        return { */
/*         ...state, */
/*         user:action.payload, */
/*         isAuthenticated: true, */
/*        }; */
/*  */
/*        case Types.LOGIN_SUCCESS : */
/*         return { */
/*          ...state, */
/*          user:action.payload, */
/*          isAuthenticated: true, */
/*         }; */
/*  */
/*         default: */
/*           return state; */
/*   } */
/* } */
  
// default reducer;

import { combineReducers } from "redux"

import registerUser from "./auth/Register/reducer";

const rootReducer = combineReducers ({
    registerUser
})

export default rootReducer