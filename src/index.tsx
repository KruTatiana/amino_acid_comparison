import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { store } from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </>
);
