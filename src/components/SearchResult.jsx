import React from 'react'
import { db } from './firebase_init'

const SearchResult = ({ bus }) => {

    return (
        <div className='search-result-con'>
            <h3>Bus Name: {bus.bus_details.name}</h3>
            <p><b>Route:</b> {bus.bus_details.route_id}</p>
            <p><b>Date:</b> {bus.date.toDate().toString()}</p>
            <p><b>Driver Name</b> {bus.bus_details.driver_name}</p>

        </div>
    )
}

export default SearchResult
