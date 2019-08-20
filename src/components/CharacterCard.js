import React from "react";
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <div> 
    <div class="ui card">
      <div class="image">
        <img src={props.character.image} alt={props.character.name} />
      </div>
      <div class="content">
        <a class="header">{props.character.name}</a>
        <div class="meta">
          <span class="date">{props.character.species} | {props.character.status}</span>
        </div>
      <div class="description">
        <p><span>Location: </span>{props.character.location.name}</p>
        <p><span>Origin: </span> {props.character.origin.name}</p>
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="film icon"></i>
          Episodes
      </a>
  </div>
</div>

   </div>
  )
}
