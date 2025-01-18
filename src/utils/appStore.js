import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./userSlice"

// first create app Store first 
// second create a user slice in which add  the usereducer
// third pass the user reducer to app Store 
// fourth use this store  in app and add provider 
const appStore = configureStore({
    reducer:{
        user:userReducer,
    }
})

export default appStore;