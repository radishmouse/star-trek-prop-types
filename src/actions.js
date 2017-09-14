// Tip #1: Make constants for your action type strings.

/*

This is what we want to produce as an action object:
{
  type: ADD_MEMBER,
  name: 'crusher',
  rank: 'chief medical officer',
  id: 12345,
  location: 'PLANET_THE_SUN',
}

{
  type: BEAM_MEMBER,
  id: 12345,
  location: 'LOCATION_SHIP',
}

{
  type: ADD_SHIP,
  name: 'Enterprise',
  id: 54321
}

{
  type: ADD_PLANET,
  name: 'Earth',
  id: 5432112345
}

{
  type: TRANSFER_CRYSTALS,
  howMany: 1,
  planetId: 4,
  shipId: 1
}

*/

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_SHIP = 'ADD_SHIP';
const ADD_PLANET = 'ADD_PLANET';
const TRANSFER_CRYSTALS = 'TRANSFER_CRYSTALS';

export default {
  ADD_MEMBER,
  BEAM_MEMBER,
  ADD_SHIP,
  ADD_PLANET,
  TRANSFER_CRYSTALS,
}