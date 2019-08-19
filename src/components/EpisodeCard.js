import React from 'react';

export default function EpisodeCard({ name, episode, airDate }) {
    return (
      <div class="ui list">
        <div class="item">
          <i class="film icon"></i>
          <div class="content">
         {name}
          </div>
        </div>
        <div class="item">
          <i class="play icon"></i>
          <div class="content">
            Episode: {episode}
          </div>
        </div>
        <div class="item">
          <i class="calendar alternate icon"></i>
          <div class="content">
            {airDate}
          </div>
        </div>
  </div>
    )
  }