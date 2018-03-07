import React, { Component } from 'react';
import CityList from './../../Container/CityList';
import WeatherList from './../../Container/WeatherList';
import './styles.css';

export default class Main extends Component {
  render() {
    return ( 
      <div className="container">
        <aside>
          <CityList />
        </aside>
        <section>
          <WeatherList />
        </section>
      </div>
    );
  }
}