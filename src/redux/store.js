import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user";

const persistConfig = {
  key: "e-wallet",
  storage,
  blacklist: ["user"],
};

const userPersistConfig = {
  key: "user-e-wallet",
  storage,
  whitelist: ["isUserAvailable", "userInfo"],
};

const combinedReducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);
