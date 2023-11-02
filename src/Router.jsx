import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Register from "./pages/register";
import Login from "./pages/Login";

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
    path: "/",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
