import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from './../../Actions';

let input;

class AddCity extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <select name="cities" ref={node => {input = node}}>
            {this.props.availableCities.map((city, index) => {
              return <option key={index} value={city} >{city}</option>
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    availableCities: ['Minsk', 'London', 'Moscow', 'New York']
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(addCity(input.value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCity)