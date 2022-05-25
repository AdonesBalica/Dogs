import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { UserStorage } from "./contexts/UserContext";
import User from "./Components/User/User";

import ProtectedRoute from "./Components/Helper/ProtectedRoute/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/UserProfile/UserProfile";
import NotFound from "./Components/NotFound/NotFound";

// meta fazer o title da página mudar automaticamente depedendo da rota em que estou;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
