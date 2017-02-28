import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';

import { fetchWeather } from '../../actions/action_weather/action_weather.jsx';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.throttlingSearchNewCity = this.throttlingSearchNewCity.bind(this);
        //this.searchNewCity = this.searchNewCity.bind(this);
    }

    // searchNewCity() {
    //     this.props.fetchWeather(this.state.term);
    //     this.setState({ term: '' });
    // }

    throttlingSearchNewCity(event) {
        event.preventDefault();
        (_.debounce(() => {
            this.props.fetchWeather(this.state.term);
            this.setState({ term: '' });
        }, 300))();

    }

    render() {
        // const throttlingSearchNewCity = _.debounce(() => {      //this.searchNewCity need bind in Constructor
        //     this.props.fetchWeather(this.state.term);
        //     this.setState({ term: '' });
        // }, 300);

        // function() {
        //     console.log(this) //this is undefined!
        // }
        const Today = new Date();
        return (

            <form
                className="input-group search-bar"

                //有时: 如果下面 =>function 中调用的function有不是用 =>function 定义的, 那没用 =>function 定义的要bind
                //有时: 只要下面是 =>function 里面调用的函数不用 =>function 也可以
                onSubmit={this.throttlingSearchNewCity}
            >
                <span className="input-group-addon  glyphicon glyphicon-certificate" aria-hidden="true"></span>
                <input className="form-control"
                    placeholder={`City with five day forecast from today (${Today.getMonth()}/${Today.getDate()}/${Today.getFullYear()})`}
                    value={this.state.term}
                    onChange={
                        (event) => {
                            this.setState({ term: event.target.value });
                        }
                    }
                />
                <span className="input-group-btn">
                    <button
                        type="submit" className="btn btn-primary"
                    >Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);