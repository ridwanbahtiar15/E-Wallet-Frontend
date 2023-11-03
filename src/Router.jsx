import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Profile from "./pages/Profile";
import ChangePin from "./pages/ChangePin";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import Transfer from "./pages/Transfer";
import EnterPin from "./pages/EnterPin";

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
  {
    path: "/",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPass",
    element: <ForgotPass/>,
  },
  {
    path: "/transfer",
    element: <Transfer/>,
  },
  {
    path: "/enterPin",
    element: <EnterPin/>,
  }
]);

export default router;
