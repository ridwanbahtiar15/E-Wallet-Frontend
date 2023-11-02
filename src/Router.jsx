import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Register from "./pages/register";

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
]);

export default router;
