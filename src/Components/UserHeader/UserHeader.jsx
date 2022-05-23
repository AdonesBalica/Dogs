import React from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "../UserHeaderNav/UserHeaderNav";
import styles from "./UserHeader.module.css";

function UserHeader() {
  const [title, setTitlte] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/conta/estatisticas":
        document.title = "Dogs | Estatísticas";
        setTitlte("Estatísticas");
        break;
      case "/conta/postar":
        document.title = "Dogs | Poste Sua Foto";
        setTitlte("Poste Sua Foto");
        break;
      default:
        document.title = "Dogs | Minha Conta";
        setTitlte("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
