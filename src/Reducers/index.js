import { combineReducers } from 'redux';
import citiesToFollow from './citiesToFollow';
import selectCity from './selectCity';
 
const weatherApp = combineReducers({
  citiesToFollow,
  selectCity
})
 
export default weatherApp;