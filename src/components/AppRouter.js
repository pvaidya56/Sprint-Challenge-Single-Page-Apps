import React from "react";
import { NavLink, Route } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import CharacterList from "./CharacterList";

   export default function AppRouter() {
    return (
      <div>
        <Route 
          exact 
          path="/" 
          component={WelcomePage} 
        />
        <Route 
          exact 
          path="/characters" 
          component={CharacterList}
        />
        <Route 
          exact 
          path="/locations" 
          component={LocationsList} 
        />
        <Route 
          exact 
          path="/episodes" 
          component={EpisodeList} 
        />
      </div>
    )
  }