import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import UserDetailsSkeleton from "./skeletons/UserDetailsSkeleton";

const ProtectedRoute = ({ element, isRequiredToLogIn }) => {
  const { user, userContextLoading } = useUserContext();

  if (userContextLoading) {
    return <UserDetailsSkeleton />;
  }

  if (isRequiredToLogIn) {
    return user ? element : <Navigate to="/login" replace />;
  }

  if (!isRequiredToLogIn) {
    return user ? <Navigate to="/" replace /> : element;
  }
};

export default ProtectedRoute;
