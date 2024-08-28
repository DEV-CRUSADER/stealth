import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

import { rootPeristConfig, rootReducer } from "./rootReducer";


const store = configureStore({
  reducer: persistReducer(rootPeristConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch;
const useSelector = useAppSelector;

export { 
  store, 
  persistor,
  dispatch,
  useSelector, 
  useDispatch
};