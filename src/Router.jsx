import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Register from "./pages/register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/history",
    element: <HistoryTransaction />,
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
