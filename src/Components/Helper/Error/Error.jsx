import React from "react";

function Error({ error }) {
  if (!error) return null;
  return <p style={{ color: "#f31", marging: "1rem 0" }}>{error}</p>;
}

export default Error;
