import React from "react";

const ProtectedRoute = () => {
  return getUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
