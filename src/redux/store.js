// import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

const store = createStore(rootReducer, applyMiddleware(...[logger]));

const persistor = persistStore(store); // Creating a new persisted version of our store

// eslint-disable-next-line
export default { store, persistor };
