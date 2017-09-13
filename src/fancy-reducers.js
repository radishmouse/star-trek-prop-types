import { LOCATIONS } from './locations';

const ADD_MEMBER = 'ADD_MEMBER';
const TRANSPORT_MEMBER = 'TRANSPORT_MEMBER';


const crewMembers = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          rank: action.rank,
          location: LOCATIONS.TRANSPORTER_ROOM,
        }
      ];
    case TRANSPORT_MEMBER:
      if (action.location in LOCATIONS) {
        return state.map( member => (
          (member.id === action.id)
          ? { ...member, location: action.location }
          : member
        ));
      }
    default:
      return state;
  }
};

export default crewMembers;
