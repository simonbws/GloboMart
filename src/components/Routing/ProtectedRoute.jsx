import React from "react";

const ProtectedRoute = () => {
  const location = useLocation();
  return getUser() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
