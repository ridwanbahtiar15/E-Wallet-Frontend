import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Private({ children }) {
  const user = useSelector((state) => state.user);
  if (user.isUserAvailable === false) return children;
  return <Navigate to="/dashboard" replace={true} />;
}

export default Private;
