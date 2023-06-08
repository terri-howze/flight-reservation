import { configureStore } from '@reduxjs/toolkit';
import flightSearch from '../reducers/toolkitflightsearch';
import user from '../reducers/toolkituser';
import flightResults from '../reducers/toolkitsearchresults';

export default configureStore({
  reducer: {
    user,
    flightSearch,
    flightResults
  }
})