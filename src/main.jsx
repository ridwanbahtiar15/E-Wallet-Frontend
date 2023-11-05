import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistedStore } from "./redux/store";
// import App from "./App.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={router} />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
