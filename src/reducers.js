import actions from './actions';

export const LOCATIONS = {
  TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
  PLANET_EARTH: 'PLANET_EARTH',
  PLANET_THE_SUN: 'PLANET_THE_SUN',
}

const crewMembers = (state=[], action) => {
  switch (action.type) {
    case actions.ADD_MEMBER:
      return state.concat({
        name: action.name,
        rank: action.rank,
        id: action.id,
        location: action.location
      });
    case actions.BEAM_MEMBER:
      return state.map( (crewMember) => {
        // if the id matches, then update the location
        if (action.id === crewMember.id) {
          // make a copy(?) of the crewMember
          // but changing the location

          // if (action.location in LOCATIONS) {
          // }

          let newLocation = crewMember.location;
          if (action.location in LOCATIONS) {
            newLocation = action.location;
          }

          return Object.assign({}, crewMember, {
            location: newLocation
          });

          // DO NOT DO THIS THING HERE BELOW.
          // crewMember.location = action.location;
          // return crewMember;
        } else {
          return crewMember;
        }
        // otherwise, just return the crewMember
      });
      break;
    default:
      return state;
  }
}

export default crewMembers;
