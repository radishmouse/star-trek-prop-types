import actions from './actions';


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

          return Object.assign({}, crewMember, {
            location: action.location
          });

          // DO NOT DO THIS THING HERE BELOW.
          // crewMember.location = action.location;
          // return crewMember;
        } else {
          return crewMember;
        }
        // otherwise, just return the crewMember
      });
    default:
      return state;
  }
}

export default crewMembers;