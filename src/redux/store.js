import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import pizzasSlice from "./slices/pizzasSlice";

export const store = configureStore({
   reducer: {
      filter: filterSlice,
      search: searchSlice,
      cart: cartSlice,
      pizzas: pizzasSlice,
   },
});
