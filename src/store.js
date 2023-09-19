import { createStore, combineReducers } from 'redux';
import {  registrationReducer, loginReducer } from './reducers/AuthReducer';
import { cartReducer, checkoutReducer, counterReducer, cardReducer } from './reducers/CartReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  addProduct: cartReducer,
  checkout: checkoutReducer,
  counter: counterReducer,
  card: cardReducer,

});

const store = createStore(rootReducer);

export default store;


// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { registrationUserRducer } from "./reducers/AuthReducer";
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"

// const initialState = {};

// const reducer = combineReducers({
//     userRegistration: registrationUserRducer,
// });

// const middleware = [thunk]

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store;

