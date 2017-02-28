import React, { Component } from 'react';

import Nav from './components/Nav.jsx';

export default class App extends Component {

    render() {
        return (
            <div>
                {/*<Nav /> Tried put Nav here, using component-state to track the active tab,
                but seems not working when refresh in not-root routes*/}
                {this.props.children}
            </div>
        );
    }
}