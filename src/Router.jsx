import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import HistoryTransaction from "./pages/HistoryTransaction";
import Profile from "./pages/Profile";
import ChangePin from "./pages/ChangePin";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import Transfer from "./pages/Transfer";
import EnterPin from "./pages/EnterPin";
import TransferDetail from "./pages/TransferDetail";
import Topup from "./pages/Topup";
import Private from "./components/Private";
import ResetPass from "./pages/ResetPass";
import IsLogin from "./components/IsLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />,
      </Private>
    ),
  },
  {
    path: "/history",
    element: (
      <Private>
        <HistoryTransaction />,
      </Private>
    ),
  },
  {
    path: "/profile",
    element: (
      <Private>
        <Profile />,
      </Private>
    ),
  },
  {
    path: "/changepin",
    element: (
      <Private>
        <ChangePin />,
      </Private>
    ),
  },
  {
    path: "/changepassword",
    element: (
      <Private>
        <ChangePassword />,
      </Private>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <IsLogin>
        <Register />,
      </IsLogin>
    ),
    // errorElement: "",
  },
  {
    path: "/auth/login",
    element: (
      <IsLogin>
        <Login />,
      </IsLogin>
    ),
  },
  {
    path: "/auth/forgotPass",
    element: (
      <IsLogin>
        <ForgotPass />,
      </IsLogin>
    ),
  },
  {
    path: "/transfer",
    element: (
      <Private>
        <Transfer />,
      </Private>
    ),
  },
  {
    path: "/enterPin",
    element: (
      <Private>
        <EnterPin />,
      </Private>
    ),
  },
  {
    path: "/transfer/:id",
    element: <TransferDetail />,
  },
  {
    path: "/topup",
    element: (
      <Private>
        <Topup />,
      </Private>
    ),
  },
  {
    path: "/resetpass",
    element: <ResetPass />,
  },
]);

export default router;
