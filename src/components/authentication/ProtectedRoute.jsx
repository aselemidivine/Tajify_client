import { useLocation, Navigate, Outlet } from "react-router-dom";
import { State } from "../../context/AuthProvider";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = State();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export const UnProtectedRoute = () => {
  const { user } = State();

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default ProtectedRoute;
