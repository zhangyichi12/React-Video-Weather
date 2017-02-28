import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => {
    if(props.active === 'video') {
        var videoActive = 'active';
    }
    else if(props.active === 'weather') {
        var weatherActive = 'active';
    }
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="http://yichizhang.us">Do Something Fun</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className={videoActive}>
                        <Link to={'/video'} >Video</Link>
                    </li>

                    <li className={weatherActive}>
                        <Link to={'/weather'}>Weather</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}