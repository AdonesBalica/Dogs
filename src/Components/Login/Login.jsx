import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";
import LoginCreate from "../LoginCreate/LoginCreate";
import LoginPasswordLost from "../LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "../LoginPasswordReset/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";
import Head from "../Helper/Head/Head";

import styles from "./Login.module.css";
import NotFound from "../NotFound/NotFound";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <Head title="Login" description="Nome do site dogs, com login." />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
