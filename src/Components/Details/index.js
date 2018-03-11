import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div>
        <p>{this.props.ditailsOfCity.id}</p>
        <p>{this.props.ditailsOfCity.name}</p>
      </div>
    );
  }
}

const getCityById = (id, cities) => {
  const element = cities.find(function (c) {
    return c.id === id;
  });
  if(element){
    return element;
  } else if(cities[0]){
    return cities[0];
  }
  return {};
}

const mapStateToProps = state => {
  return {
    ditailsOfCity: getCityById(state.ditailsOfCityId, state.citiesToFollow)
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    deleteCityClick: (id) => {
      dispatch({
        type: 'DELETE_CITY',
        id
      })
    }
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)