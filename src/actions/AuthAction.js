export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

export const loginUser = (userData) => ({
    type: LOGIN_USER,
    payload: userData,
});

// import {
//     REGISTRATION_REQUEST,
//     REGISTRATION_SUCCESS,
//     REGISTRATION_FAIL,

//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,

//     LOAD_USER_REQUEST,
//     LOAD_USER_SUCCESS,
//     LOAD_USER_FAIL,

//     FORGET_PASSWORD_REQUEST,
//     FORGET_PASSWORD_SUCCESS,
//     FORGET_PASSWORD_FAIL,

//     RESET_PASSWORD_REQUEST,
//     RESET_PASSWORD_SUCCESS,
//     RESET_PASSWORD_FAIL,

//     CLEAR_ERROR
  
// } from "../constants/AuthConstant.js";

// export const registrationUser = (userData) => async (dispatch) => {

//     try {

//         dispatch({
//             type: REGISTRATION_REQUEST,
//         })

//         // const config = { headers: {"Content-Type": "application/json"}}

//         // const { data } = await axios.post('/api/user-auth/register', userData, config);

//         // console.log(data,"reg")

//         dispatch({
//             type: REGISTRATION_SUCCESS,
//             payload: userData
//         })

        
//     } catch (error) {
        
//         dispatch({
//             type: REGISTRATION_FAIL,
//             payload: error.response.data.message,
//         })
//     }
// }
