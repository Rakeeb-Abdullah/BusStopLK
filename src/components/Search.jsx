import React, { useState } from 'react'
import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import { FaLocationArrow } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Search = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")
    console.log(from)

    return (
        <form className='search-form' action="">
            <div className='form-container'>

                <div className='input'><div className='input-icon' id='from'><HiLocationMarker size={25} color="white" /></div>
                    <input onChange={(e) => setFrom(e.target.value)
                    } required="true" type="text" placeholder='From' />
                </div>

                <div className='input'><div className='input-icon' id='to'><HiLocationMarker size={25} color="white" /></div>
                    <input onChange={(e) => setTo(e.target.value)} required="true" type="text" placeholder='To' />
                </div>

                <div className='input' id='date-input'><div className='input-icon' id='date'><HiCalendar size={25} color="white" /></div>
                    <input onChange={(e) => setDate(e.target.value)} type="date" required="true" />
                </div>


            </div>
            <Link to={from && to && date && `search/${from[0].toUpperCase() + from.slice(1)}/${to[0].toUpperCase() + to.slice(1)}/${date}`} className='search-btn' type='submit'><FaLocationArrow size={25} color="#23C4A5" /></Link>
        </form>
    )


}

export default Search
