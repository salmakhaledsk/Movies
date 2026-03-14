import React from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../Store/Slices/Language";

function Home() {
  //hna mskt el state el kbeera w e5trt na 3awza a3rd eh f e5trt el language
 const Lang= useSelector((state)=>
    state.sliceLanguage.language)
    console.log(Lang)
  
  const navigate = useNavigate();
  //dispatch 3mltha 3lshan a3ml change ll state language
  const dispatch= useDispatch()
  const toggleLang = () => {
    if (Lang === "ar") {
      
      dispatch(changeLanguage("en")) 
    } else {
      dispatch(changeLanguage("ar"))
  }}
  return (
    <>
    {/* <h3>language is :{Lang}</h3> */}
    <button className="btn btn-success" onClick={() => navigate("/products")}>
        Explore Movies
      </button>
    <div className="home">

    </div>
        {/* <button className="btn btn-success" onClick={()=>{toggleLang()}} >
       changeLanguage
      </button> */}
      {/* <p>home</p> */}

    </>
  );
}

export default Home;
