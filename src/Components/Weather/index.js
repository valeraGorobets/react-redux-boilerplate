import React, { Component } from 'react';
import './styles.css';

const className = {
  "Sunny": "Sunny",
  "Clear": "Clear",
  "Breezy": "Breezy",
  "Showers": "Showers",
  "Cloudy": "Cloudy",
  "Partly Cloudy": "PartlyCloudy",
  "Mostly Cloudy": "MostlyCloudy",
  "Snow": "Snow",
  "Snow Showers": "Snow",
};

export default class Weather extends Component {

  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    this.props.data
      .then(data => {
        data = data.data.query.results.channel;
        console.log(data)
        this.setState({
          city: data.location.city,
          country: data.location.country,
          text: data.item.condition.text,
          windSpeed: this.toMPS(data.wind.speed),
          humidity: data.atmosphere.humidity,
          temp: this.toCelsius(data.item.condition.temp),
          image: this.getClassNameByCondition(data.item.condition.text),
        });
      });
  }

  toCelsius(temp) {
    return Math.round((temp - 32) * 5/9);
  }

  toMPS(speed) {
    return Math.round(speed*0.44704);
  }

  getClassNameByCondition (weather) {
    const defaultImage = "Default";
    return className[weather] || defaultImage;
  }
  
  render() {
    return (
       <div className={`${this.state.image} card`}>
        <h2 className="card-title">{this.state.city},</h2>
        <h2 className="card-title">{this.state.country}</h2>
        <div className="condition">{this.state.text}</div>
        <div className="condition-params">Wind {this.state.windSpeed} m/s; Humidity: {this.state.humidity}%</div>
        <div className="row temp">
          <div className="text-xs-center pull-right">{this.state.temp}&deg;</div>
        </div>
      </div>
    );
  }
}