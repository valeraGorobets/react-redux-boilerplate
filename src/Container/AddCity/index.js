import React from 'react';
import { connect } from 'react-redux';
import { addCity } from './../../Actions';

let input;
const availableCities = ['Minsk', 'London', 'Moscow', 'New York'];

let AddCity = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch(addCity(input.value))
      }}>
        <select name="cities" ref={node => {input = node}}>
          {availableCities.map((city, index) => {
            return <option key={index} value={city} >{city}</option>
          })}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
AddCity = connect()(AddCity)
 
export default AddCity