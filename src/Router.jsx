import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Profile from "./pages/Profile";
import ChangePin from "./pages/ChangePin";
import ChangePassword from "./pages/ChangePassword";

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/changepin",
    element: <ChangePin />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
  },
]);

export default router;
