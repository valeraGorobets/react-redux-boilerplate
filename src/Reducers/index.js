import { combineReducers } from 'redux';
import citiesToFollow from './citiesToFollow';
import ditailsOfCityId from './ditailsOfCityId';
 
const weatherApp = combineReducers({
  citiesToFollow,
  ditailsOfCityId
})
 
export default weatherApp;