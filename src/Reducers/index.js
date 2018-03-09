import { combineReducers } from 'redux';
import selectCity from './selectCity';
 
const weatherApp = combineReducers({
  selectCity
})
 
export default weatherApp;