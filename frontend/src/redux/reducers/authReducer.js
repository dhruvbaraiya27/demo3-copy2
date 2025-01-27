// src/redux/reducers/authReducer.js
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    registrationSuccess: false
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { 
          ...state, 
          loading: true, 
          error: null 
        };
      
      case 'LOGIN_SUCCESS':
        return { 
          ...state, 
          loading: false, 
          isAuthenticated: true, 
          user: action.payload,
          error: null
        };
      
      case 'LOGIN_FAILURE':
        return { 
          ...state, 
          loading: false, 
          isAuthenticated: false, 
          user: null, 
          error: action.payload 
        };
        case 'REGISTER_REQUEST':
        return { 
          ...state, 
          loading: true, 
          error: null,
          registrationSuccess: false 
        };
      
      case 'REGISTER_SUCCESS':
        return { 
          ...state, 
          loading: false,
          registrationSuccess: true,
          user: action.payload 
        };
      
      case 'REGISTER_FAILURE':
        return { 
          ...state, 
          loading: false, 
          error: action.payload,
          registrationSuccess: false 
        };
      
      case 'LOGOUT':
        return initialState;
      
      default:
        return state;
    }
  }