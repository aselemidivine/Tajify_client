import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export const UnProtectedRoute = () => {

  return <Outlet />;
};

export default ProtectedRoute;
