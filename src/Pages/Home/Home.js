import React from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const Lang = useSelector((state) => state.sliceLanguage.language);
  console.log(Lang);

  const navigate = useNavigate();

  return (
    <>
      <button className="btn btn-success" onClick={() => navigate("/products")}>
        Explore Movies
      </button>
      <div className="home"></div>
    </>
  );
}

export default Home;