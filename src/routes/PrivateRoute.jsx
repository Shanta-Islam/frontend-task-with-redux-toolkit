import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate state={location.pathname} to={"/login"} replace />;
};

export default PrivateRoute; 