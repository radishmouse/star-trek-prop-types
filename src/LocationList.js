import React from 'react';
import _ from 'lodash';

const Location = ({name, id, resources, clickHander}) => (
  <div>
    <h1>{name}</h1>
    <button onClick={ (e) => {
      e.preventDefault();
      clickHander('crystals', 100, id);
    }}>💰💰💰</button>
    <ul>
      {
        Object.keys(resources).map( key => (
          <li key={id}>{key}: {resources[key]}</li>
        ))
      }
    </ul>
  </div>
);

const LocationList = ({locations, onAddResourcesClick}) => {
  let individualLocations = _.flatten(Object.keys(locations).map( loc => {
    return [].concat(_.values(locations[loc]));
  }))
  return <div>
    {
      individualLocations.map( loc => (
        <Location
          key={loc.id}
          name={loc.name}
          id={loc.id}
          resources={loc.resources}
          clickHander={onAddResourcesClick}
        />
      ))
    }
  </div>
};

export default LocationList;