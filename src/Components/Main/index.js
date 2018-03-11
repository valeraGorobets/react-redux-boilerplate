import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import AddCity from './../AddCity';
import CityList from './../CityList';
import WeatherList from './../WeatherList';
import Details from './../Details';
import './styles.css';

export default class Main extends Component {
  render() {
    return ( 
      <div className="container">
        <aside>
          <AddCity />
          <CityList />
        </aside>
        <section>
          <nav>
            <ul>
              <li><Link to='/overview'>Overview</Link></li>
              <li><Link to='/details'>Details</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/overview' component={WeatherList}/>
            <Route path='/details' component={Details}/>
            <Redirect to='/overview' />
          </Switch>
        </section>
      </div>
    );
  }
}