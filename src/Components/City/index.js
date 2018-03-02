import React, { Component } from 'react';
import './styles.css';

export default class City extends Component {
  render() {
    return ( 
      <div className="city">
        <p> {this.props.city} </p>
      </div>
    );
  }
}