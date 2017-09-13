import actions from './actions';

export const LOCATIONS = {
  TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
  PLANET_EARTH: 'PLANET_EARTH',
  PLANET_THE_SUN: 'PLANET_THE_SUN',
}

const crewMembers = (state=[], action) => {
  switch (action.type) {
    case actions.ADD_MEMBER:
      // *** Very nice, immutable way to add on to an array!
      // return state.concat({
      //   name: action.name,
      //   rank: action.rank,
      //   id: action.id,
      //   location: action.location
      // });

      // Equivalent to state.concat version,
      // bit using the array spread operator
      return [
        ...state,
        {
          name: action.name,
          rank: action.rank,
          id: action.id,
          location: action.location
        }
      ]

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

          // *** Nice looking longer version of Object "cloning"
          // return Object.assign({}, crewMember, {
          //   location: newLocation
          // });

          // This is equivalent to the Object.assign version
          return {
            ...crewMember,
            location: newLocation
          }



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
