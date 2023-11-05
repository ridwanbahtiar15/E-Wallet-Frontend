import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Private({ children }) {
  const user = useSelector((state) => state.user);
  if (user.isUserAvailable === true) return children;
  return <Navigate to="/login" replace={true} />;
}

export default Private;
