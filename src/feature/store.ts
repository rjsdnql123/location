import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Login from './Login/LoginSlice';
import Post from './Post/PostSlice';

export default configureStore({
	reducer: {
		Login,
		Post,
	},
});
