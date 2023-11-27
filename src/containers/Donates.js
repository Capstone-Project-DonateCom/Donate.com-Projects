import React from 'react'
import NavBar from '../components/navbar/Navbar'
import gform from "../assets/gform.png";
const Donates = () => {
  return (
    <div>
        <NavBar/>
        {/* Hero */}
        <div>
        <img src={gform} />
        </div>
    </div>
  )
}

export default Donates