import React from 'react'
import "./styles/main.css"
import { FiChevronUp, FiMenu } from 'react-icons/fi'
import { useState } from 'react'

const Navbar = () => {
    const [expand, setExpand] = useState(false)

    return (
        <>
            <div className={expand ? "nav-bar nav-bar-expand" : "nav-bar"}>
                <p className="nav-title">BusStop</p>
                <div className={expand ? "nav-items nav-items-vis" : "nav-items"}>

                    <p >Home</p>
                    <p>Profile</p>
                    <p>About</p>

                </div>
                {expand ? <FiChevronUp className='nav-expand-btn' size="40px" color='#00dfb6' onClick={() => setExpand(!expand)} /> : <FiMenu className='nav-expand-btn' size="40px" color='#00dfb6' onClick={() => setExpand(!expand)} />}

            </div>

        </>
    )
}

export default Navbar
