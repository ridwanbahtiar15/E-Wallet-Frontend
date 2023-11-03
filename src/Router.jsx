import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import Transfer from "./pages/Transfer";

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
    path: "/forgotPass",
    element: <ForgotPass/>
  },
  {
    path: "/transfer",
    element: <Transfer/>
  }
]);

export default router;
