import React from "react";
import { UserContext } from "../../../contexts/UserContext";
//eslint-disable-next-line
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext);

  if (login === true) return children;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
}

export default ProtectedRoute;
