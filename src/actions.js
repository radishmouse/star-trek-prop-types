let thingy = {
  locations: {
    planets: {
      '52': {
        id: 52,
        name: 'Pluto',
        resources: {
          crystals: 1000
        }
      },
      '54': {
        id: 54,
        name: 'Earth',
        resources: {
          crystals: 1000
        }
      },
    },
    ships: {
      '1000': {
        id: 1000,
        name: 'Enterprise',
        cargo: 500,
        resources: {
        }
      }
    }
  },
  crewMembers: {
    '300': {
      id: 300,
      name: 'Leo',
      rank: 'That big dude',
      location: 52
    }
  }
}

/*





*/



// Tip #1: Make constants for your action type strings.

/*

This is what we want to produce as an action object:
{
  type: ADD_MEMBER,
  name: 'crusher',
  rank: 'chief medical officer',
  id: 12345,
  location: 54,
}

{
  type: BEAM_MEMBER,
  id: 12345,
  location: 1000,
}

{
  type: ADD_SHIP,
  name: 'Enterprise',
  id: 54321,
  resources: {
    cargo: 10000000000
  }
}

{
  type: ADD_LOCATION,
  locationType: LOCATION_PLANET
  name: 'Earth',
  id: 5432112345
}

{
  type: REMOVE_RESOURCE,
  resource: 'crystals',
  howMany: 1,
  id: 1
}

{
  type: ADD_RESOURCE,
  resource: 'crystals',
  howMany: 1,
  id: 1
}



*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_LOCATION = 'ADD_LOCATION';
const ADD_RESOURCE = 'ADD_RESOURCE';
const REMOVE_RESOURCE = 'REMOVE_RESOURCE';

const LOCATION_PLANET = 'planet';
const LOCATION_SHIP = 'ship';

const addMember = (name, rank, id, location) => {
  return {
    type: ADD_MEMBER,
    name: name,
    rank: rank,
    id: id,
    location: location,
  }
};

const beamMember = (id, locationId) => {
 return {
    type: BEAM_MEMBER,
    id: id,
    location: locationId,
  }
};

const addShip = (name, id, resources) => {
  return {
    type: ADD_LOCATION,
    locationType: LOCATION_SHIP,
    name: name,
    id: id,
    resources: resources
  }
};

// EXAMPLES OF HOW TO USE. DO NOT PUT IN actions.js
// JUST SHOWING ON SCREEN FOR DEMO ;P
store.dispatch(addShip('Enterprise', 100, {}));

// THIS GOES IN reducers.js
const locations = (state={ planets: {}, ships: {}}, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      const newState = {...state};
      if (action.locationType === LOCATION_SHIP) {
        newState.ships[action.id] = {
          id: action.id,
          name: action.name,
          resources: action.resources
        }
      } else {
        newState.planets[action.id] = {
          id: action.id,
          name: action.name,
          resources: action.resources
        }
      }
      return newState;
    default:
      return state;
  }
}



export default {
  addMember,
}