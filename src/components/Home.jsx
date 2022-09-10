import React from 'react'
import Search from './Search'
import { AiOutlineCopyright } from "react-icons/ai"

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Welcome to<span> BusStop.lk</span></h1>
            <Search />
            <p style={{ "color": 'white', fontWeight: "lighter" }} className='copyright'> ©️ Team <span style={{ "color": "#CA2E6A", fontFamily: "Poppins", fontWeight: 600 }}>XYZ</span></p>
        </div>
    )
}

export default Home
