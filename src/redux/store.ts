import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/slice';

const middleware = (getDefaultMiddleware: (arg0: { serializableCheck: { ignoredActions: ("persist/FLUSH" | "persist/REHYDRATE" | "persist/PAUSE" | "persist/PERSIST" | "persist/PURGE" | "persist/REGISTER")[]; }; }) => any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
   products: productReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});



export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//_____________
// import { configureStore } from '@reduxjs/toolkit';
// import  productReducer from './products/slice';

// const store = configureStore({
//   reducer: {
//    products: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;
