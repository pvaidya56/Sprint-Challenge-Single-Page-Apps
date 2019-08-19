import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div class="ui card">
      <div class="content">
    <div class="header">{name}</div>
      </div>
  <div class="content">
    <h4 class="ui sub header">{type}</h4>
    <div class="ui small feed">
      <div class="event">
        <div class="content">
          <div class="summary">
             <p>{dimension}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extra content">
    <i class="users icon"></i>{residents.length} residents
  </div>
</div>
  )
}
