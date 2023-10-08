import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './slices';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, REGISTER, REHYDRATE, PURGE } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
