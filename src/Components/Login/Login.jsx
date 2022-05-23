import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";
import LoginCreate from "../LoginCreate/LoginCreate";
import LoginPasswordLost from "../LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "../LoginPasswordReset/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";

import styles from "./Login.module.css";

function Login() {
  const { login } = React.useContext(UserContext);
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      default:
        document.title = "Dogs | Login";
        break;
    }
  }, [location]);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
