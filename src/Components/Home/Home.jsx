import React from "react";
import { useLocation } from "react-router-dom";
import Feed from "../Feed/Feed";

function Home() {
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      default:
        document.title = "Dogs | Home";
        break;
    }
  }, [location]);
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
}

export default Home;
