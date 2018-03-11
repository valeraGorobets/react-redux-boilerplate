import React, { Component } from 'react';
import './styles.css';

export default class City extends Component {
  render() {
    return ( 
      <div className="city" onClick={this.props.onClick}>
        <p>{this.props.name} ----- {this.props.children}</p>
      </div>
    );
  }
}