import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import UserSlice from './UserSlice';

const combinedReducer = combineReducers({
  user: UserSlice,
});

const rootReducer = (state, action) => {
  // Reset the Redux store
  // For Logout
  if (action.type === 'user/clearUserAndStore') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

// Configure Redux Store Persistence
const storePersistenceConfig = {
  key: 'root',
  storage,
  whitelist: 'UserSlice'
}

// Setup Persisted Redux Store
const persistedReducer = persistReducer(storePersistenceConfig, rootReducer)

// Final Redux Store Setup
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    // { serializableCheck: false }
  ),
  devTools: process.env.REACT_APP_DEPLOYMENT_ENV !== 'production',
  // .concat(
  //   cepApi.middleware,
  // ),
});

export default store;