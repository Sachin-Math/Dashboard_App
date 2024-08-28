import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
