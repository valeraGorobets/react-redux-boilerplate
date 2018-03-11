import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from './../Weather';
import requestWeather from './../../Services/YahooWeatherService';
import './styles.css';

class WeatherList extends Component {
  render() {
    return (
      <div>
        {this.props.citiesToFollow.map((city) => {
          return <Weather data={requestWeather(city.name)} key = {city.id}/> 
        })
        }
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
    onClick: (id) => {
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
)(WeatherList)
