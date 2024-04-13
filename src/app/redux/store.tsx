import { combineReducers, configureStore } from "@reduxjs/toolkit"; // old
import UserSlice from "./slices/userSlice"; // Old
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; //new
import storage from "redux-persist/lib/storage"; //new

const persistConfig = {
  key: "persist-store",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, UserSlice)

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, UserSlice),
});

// Old
// const store = configureStore({
//   reducer: {
//     user: UserSlice
//   }
// });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
// const store = configureStore(persistedReducer)

// Old
export default store;
