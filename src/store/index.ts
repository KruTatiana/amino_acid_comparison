import { configureStore } from "@reduxjs/toolkit";
import formReduser from "./formSlise";

export const store = configureStore({
  reducer: {
    form: formReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
