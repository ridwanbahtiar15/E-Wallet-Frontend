import { createBrowserRouter } from "react-router-dom";

import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    // errorElement: "",
  },
]);

export default router;
