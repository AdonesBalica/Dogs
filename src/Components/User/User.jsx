import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head/Head";
import NotFound from "../NotFound/NotFound";
import UserHeader from "../UserHeader/UserHeader";
import UserPhotoPost from "../UserPhotoPost/UserPhotoPost";
import UserStats from "../UserStats/UserStats";

function User() {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" description="Nome do site dogs, minha conta." />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;
