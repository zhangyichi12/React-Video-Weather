import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../../components/weather/chart.jsx';
import GoogleMap from '../../components/weather/google_map.jsx';

class WeatherList extends Component {

    renderCityWeather(cityData) {

        //不加{}, 相当于默认return
        const temps = _.map(cityData.list.map(weather =>  weather.main.temp ), (temp) => {
            return (temp - 273.15) * 1.8 + 32;
        });
        const pressures = cityData.list.map(weather =>  weather.main.pressure );
        const humidities = cityData.list.map(weather =>  weather.main.humidity );

        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={JSON.stringify(cityData.city.coord)}>
                <td><GoogleMap lat={lat} lng={lon} /></td>
                <td>
                    <Chart data={temps} color='blue' unit='F'/>
                </td>
                <td>
                    <Chart data={pressures} color='green' unit='hPa'/>
                </td>
                <td>
                    <Chart data={humidities} color='grey' unit='%'/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderCityWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
