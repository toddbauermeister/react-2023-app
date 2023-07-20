import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import counterSlice from '../reducers/counterSlice';

const combinedReducer = combineReducers({
  counter: counterSlice,
});

const rootReducer = (state, action) => {
  // if (action.type === 'user/resetUser') {
  //   // Reset the Redux store
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};

const store = configureStore({
  devTools: process.env.REACT_APP_DEPLOYMENT_ENV !== 'production',
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      // { serializableCheck: false }
    )
    // .concat(
    //   cepApi.middleware,
    // ),
});

export default store;