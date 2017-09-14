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
const LOCATION_PLANET = 'planets'
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
const ADD_SHIP = 'ADD_SHIP';
const ADD_PLANET = 'ADD_PLANET';
const ADD_CRYSTALS = 'ADD_CRYSTALS';
const REMOVE_CRYSTALS = 'REMOVE_CRYSTALS';

export default {
  ADD_MEMBER,
  BEAM_MEMBER,
  ADD_SHIP,
  ADD_PLANET,
  ADD_CRYSTALS,
  REMOVE_CRYSTALS,
}