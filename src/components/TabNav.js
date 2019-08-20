import React from "react";


import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";	import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";


 const panes = [
  { menuItem: 'Home Page', render: () => <Tab.Pane attached={false}><WelcomePage/></Tab.Pane> },
  { menuItem: 'Characters', render: () => <Tab.Pane attached={false}><CharacterList/></Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane attached={false}><LocationsList/></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane attached={false}><EpisodeList/></Tab.Pane> },

 ]
// TODO: Add missing tabs below	// TODO: Add missing tabs below
	export default function TabNav() {

   return <Tab menu={{ pointing: true }} panes={panes} />
};