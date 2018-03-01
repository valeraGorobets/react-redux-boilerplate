import React, { Component } from 'react';
import './styles.css'

export default class Header extends Component {
  render() {
    return ( 
      <header>
        <h1 className="text-center">Weather App</h1>
      </header>
    );
  }
}