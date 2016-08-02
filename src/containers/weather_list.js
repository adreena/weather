import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component{
  renderWeather(cityData){

      const temps = cityData.list.map(weather=>weather.main.temp);
      const humidities = cityData.list.map(weather=>weather.main.humidity);
      const pressures = cityData.list.map(weather=>weather.main.pressure);
      const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;

      return (
          <tr key={cityData.city.name}>
            <td><Map lon={lon} lat={lat}/></td>
            <td><Chart data={temps} color='red' units='K'/></td>
            <td><Chart data={pressures} color='green' units='hPa'/></td>
            <td><Chart data={humidities} color='orange' units='%'/></td>
          </tr>
      );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return { weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
