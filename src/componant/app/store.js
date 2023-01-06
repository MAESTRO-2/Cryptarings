import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../serviecs/cryptoApi';
import { cryptoNewsApi } from '../serviecs/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware ),
 
   
});