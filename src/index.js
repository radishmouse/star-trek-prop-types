import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
// import App from './App';
import LocationContainer from './LocationContainer';
import registerServiceWorker from './registerServiceWorker';

import { LOCATIONS } from './reducers';

import * as actions from './actions';
import * as constants from './constants';

import starTrekApp from './reducers';

import { createStore } from 'redux';

import _ from 'lodash';

window._ = _;


const store = createStore(starTrekApp, {"locations":{"planets":{"8988":{"id":8988,"name":"earth","resources":{"crystals":101}},"12346":{"id":12346,"name":"mars","resources":{"crystals":5}}},"ships":{"8989":{"id":8989,"name":"galactia","resources":{"crystals":10}}}}});

window.store = store;
window.actions = actions;
window.constants = constants;

ReactDOM.render(
  <Provider store={store}>
    <LocationContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();




// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'Enterprise',
//   id: 1
// })

// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'EXCELSIOR',
//   id: 2
// })

// store.dispatch({
//   type: window.ADD_SHIP,
//   name: 'Discovery',
//   id: 3
// })


// store.dispatch({
//   type: window.ADD_PLANET,
//   name: 'Atlanta, the one with no power',
//   id: 4
// })

// store.dispatch({
//   type: window.ADD_PLANET,
//   name: 'Pluto, which is totally a planet',
//   id: 5
// })

// store.dispatch({
//   type: window.ADD_MEMBER,
//   name: 'uhuru',
//   rank: 'commander',
//   id: 11111,
//   location: LOCATIONS.PLANET_EARTH
// })

// store.dispatch({
//   type: window.ADD_MEMBER,
//   name: 'crusher',
//   rank: 'chief medical officer',
//   id: 111222211,
//   location: LOCATIONS.PLANET_EARTH
// })



// const transferCrystals = (store, howMany, fromId, toId) => {
//   // getState, see if there are enough crystals

//   const allPlanets = store.getState().planets;
//   const thePlanet = allPlanets.filter( planet => fromId === planet.id)[0]; // GIANT ASSUMPTION HERE!!!

//   // then dispatch two actions
//   if (thePlanet.crystals >= howMany) {
//     store.dispatch({
//       type: actions.REMOVE_CRYSTALS,
//       howMany: howMany,
//       id: fromId
//     });
//     store.dispatch({
//       type: actions.ADD_CRYSTALS,
//       howMany: howMany,
//       id: toId
//     });
//   } else {
//     // don't do nuthin.
//     // stop it.
//   }


// };

// window.transferCrystals = transferCrystals;
