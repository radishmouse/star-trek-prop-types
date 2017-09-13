import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { LOCATIONS } from './reducers';

import actions from './actions';

import crewMembers from './reducers';

import { createStore } from 'redux';

const store = createStore(crewMembers);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;

window.TRANSPORTER_ROOM = LOCATIONS.TRANSPORTER_ROOM;
window.PLANET_EARTH = LOCATIONS.PLANET_EARTH;
window.PLANET_THE_SUN = LOCATIONS.PLANET_THE_SUN;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
