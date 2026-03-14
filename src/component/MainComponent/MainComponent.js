import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'

function MainComponent() {
  //b5osh gwa el satate w a5tar
  // b acsses beha el reduser 3lahsan el page de tshofo 
  const Lang= useSelector((state)=>state.sliceLanguage.language)
  return (
    <>
    <div dir={`${Lang === "ar" ? "ltr" : "rtl"}`}>
    <NavBar/>
    <Outlet />
    </div>
      
    </>
  )
}

export default MainComponent
