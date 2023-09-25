import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to='/login' />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
