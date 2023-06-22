import { configureStore } from '@reduxjs/toolkit';
import comment from './slices/comment';
// import rootReducer from './reducers'

const store = configureStore({
	reducer: {
		comment : comment
	},
});

export default store;
