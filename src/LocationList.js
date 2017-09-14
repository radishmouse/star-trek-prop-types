import React from 'react';
import _ from 'lodash';

const Location = ({name, resources}) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        Object.keys(resources).map( key => (
          <li>{key}: {resources[key]}</li>
        ))
      }
    </ul>
  </div>
);

const LocationList = ({locations}) => {
  let individualLocations = _.flatten(Object.keys(locations).map( loc => {
    return [].concat(_.values(locations[loc]));
  }))
  return <div>
    {
      individualLocations.map( loc => (
        <Location
          name={loc.name}
          resources={loc.resources}
        />
      ))
    }
  </div>
};

export default LocationList;