import { combineReducers } from 'redux';

import VideosReducer from './reducer_video/reducer_videos.jsx';
import ActiveVideoReducer from './reducer_video/reducer_active_video.jsx';

import WeatherReducer from './reducer_weather/reducer_city_weather.jsx';

// import BooksReducer from './reducer_books/reducer_books.jsx';
// import ActiveBookReducer from './reducer_books/reducer_active_book.jsx';

const rootReducer = combineReducers({
    // books: BooksReducer,
    // activeBook: ActiveBookReducer,
    videos: VideosReducer,
    activeVideo: ActiveVideoReducer,
    
    weather: WeatherReducer
});

export default rootReducer;