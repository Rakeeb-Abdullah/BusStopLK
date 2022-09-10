import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import db from './firebase_init'
import { useCollectionData } from "react-firebase-hooks/firestore";
import SearchResult from './SearchResult';


const SearchResults = () => {
    const params = useParams()

    const from = params.from
    const to = params.to

    const fromto = [from, to]
    const date = params.date
    const busRef = db.collection("buses");
    const routeRef = db.collection('routes')
    const journeyRef = db.collection('journeys')

    const [buses] = useCollectionData(busRef);
    const [routes] = useCollectionData(routeRef);
    const [journeys] = useCollectionData(journeyRef);

    const searchBus = (buses, routes, journeys, fromto, date) => {

        const route_id = routes.map((rts) => {
            const available = fromto.every(place => rts.route.includes(place))
            return (available && rts.route_id)
        }).filter(e => e !== false)
        console.log(route_id)

        const bus_id_date = route_id && journeys.map((journey) => {
            const j_available = journey.route_id == route_id && journey.date.toMillis() > Date.parse(date) && true;
            return (j_available && [journey.bus_id, journey.date])
        })

        // console.log(bus_id)
        // console.log(buses)

        const available_buses = []
        for (let i = 0; i < buses.length; i++) {
            const bus = buses[i];
            for (let i2 = 0; i2 < bus_id_date.length; i2++) {
                const id = bus_id_date[i2][0];
                bus.bus_id === id && available_buses.push({ "bus_details": bus, "date": bus_id_date[i2][1] })
            }
        }
        return available_buses

    }

    // console.log(available_buses)






    return (
        routes ?
            <div className='search-results'>
                <br />
                <br />
                {searchBus(buses, routes, journeys, fromto, date).length > 0 ? <><h1>Search Results</h1>
                    {searchBus(buses, routes, journeys, fromto, date).map((bus) => <SearchResult bus={bus} />)}</> : <h1>"No buses found"</h1>}
            </div>
            : <div>
                <br />
                <br />
                <br />
                <br />
                <h1>Loading</h1>
            </div>


    )
}

export default SearchResults
