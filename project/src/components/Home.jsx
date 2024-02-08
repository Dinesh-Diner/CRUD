import React from 'react'
import style from "./Home.module.css"
import {Link} from "react-router-dom"



const Home = () => {
  return (
    <div id={style.home} >
        <Link to="/">CREATE-USERS</Link>
        <Link to="/users">USERS</Link>
    </div>
  )
}

export default Home