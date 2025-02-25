import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user-reducer";
import shopReducer from "./shop/shop.reducer";
import homeReducer from "./home/home.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  home: homeReducer,
});

export default persistReducer(persistConfig, rootReducer);
