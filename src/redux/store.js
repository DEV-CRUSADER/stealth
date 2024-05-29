import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

import { rootReducer, rootPeristConfig } from "./rootReducer";


const store = configureStore({
  reducer: persistReducer(rootPeristConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});


const persistor = persistStore(store);

const { getState, dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = useAppDispatch;

export { 
  store, 
  persistor, 
  getState, 
  dispatch, 
  useSelector, 
  useDispatch
};