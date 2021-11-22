import React from "react";
import { Link } from "react-router-dom";
import Header from "../../componentes/Header/header";


export default function Post() {
  return (
    <main style={{ padding: "1rem 0", color: "#ffffff" }}>
      
      <Link to="/edit"><Header /></Link>
      <h2>Page Post</h2>
    </main>
  );
}
