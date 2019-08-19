import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from 'axios';


export default function EpisodeList() {

   const [episodes, setEpisodes] = useState([])

   useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
        .then(data => {
          // console.log('Episodes API call result', data.data)
          setEpisodes(data.data.results)
        })
        .catch(err => {
          console.log('Error', err)
        })
  }, [])

   return (
    <section className="grid-view">
      {episodes.map(episode => {
        return <EpisodeCard name={episode.name} episode={episode.episode} airDate={episode.air_date} key={episode.id}/>
      })}
    </section>
  )


 } 