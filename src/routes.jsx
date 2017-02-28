import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import VideoApp from './containers/container_video/video_app.jsx';
import WeatherApp from './containers/container_weather/weather_app.jsx';
//import BooksApp from './components/books/books_app.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={VideoApp} />
        <Route path="video" component={VideoApp} />
        <Route path="weather" component={WeatherApp} />
    </Route>
)