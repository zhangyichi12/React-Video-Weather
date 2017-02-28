import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from './search_bar.jsx';
import WeatherList from './weather_list.jsx';
import Nav from '../../components/Nav.jsx';

import { fetchWeather } from '../../actions/action_weather/action_weather.jsx';

class WeatherApp extends Component {
    constructor(props) {
        super(props);

        // navigator.geolocation.getCurrentPosition(({ coords }) => {   No Secure through http
        //     this.props.fetchWeather(coords);
        // });
    }

    render() {
        return (
            <div>
                <Nav active='weather'/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="row">
                        <WeatherList />
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(WeatherApp);