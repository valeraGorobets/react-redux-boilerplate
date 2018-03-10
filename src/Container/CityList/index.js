import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from './../../Components/City';
import './styles.css';

class CityList extends Component {
  render() {
    return (
      <div>
        {this.props.citiesToFollow.map((city) => {
          return <City name={city.name} key={city.id} onClick={() => this.props.onCityClick(city.id)}/>
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
    onCityClick: (id) => {
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
)(CityList)
