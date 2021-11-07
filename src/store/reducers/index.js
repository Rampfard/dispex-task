import { combineReducers } from 'redux';

import { address } from './address';
import { clients } from './clients';

const rootReducers = combineReducers({
  address,
  clients,
});

export default rootReducers;
