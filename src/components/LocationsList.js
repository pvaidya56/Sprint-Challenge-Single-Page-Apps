import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

   useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(data => {
        console.log('Results', data.data.results)
        setLocations(data.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
  },[]);

   return (
    <section className="grid-view ui segment active tab">
      {locations.map(location => {
        return <LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents} key={location.id}/>
      })}
    </section>
  )
}
