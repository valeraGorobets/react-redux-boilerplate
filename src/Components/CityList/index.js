import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import City from './../City';
import './styles.css';

class CityList extends Component {
  constructor(){
    super();
  }
  render() {
    const pathname = this.props.location.pathname;
    return (
      <div>
        {this.props.citiesToFollow.map((city) => {
          if(pathname === '/overview'){
            return <City name={city.name} key={city.id} onClick={() => this.props.deleteCityClick(city.id)}>Delete</City>
          } else {
            return <City name={city.name} key={city.id} onClick={() => this.props.ditailsOfCity(city.id)}>Show Details</City>
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    citiesToFollow: state.citiesToFollow
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    deleteCityClick: (id) => {
      dispatch({
        type: 'DELETE_CITY',
        id
      })
    },
    ditailsOfCity: (id, name) => {
      dispatch({
        type: 'DITAILS_OF_CITY',
        id
      })
    }
  }
}
 
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList))
