import { FETCH_WEATHER } from '../../actions/action_weather/action_weather.jsx';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER:
            var currentState = state;
            const existCity = currentState.find((data) => {
                return data.city.name === action.payload.data.city.name
            });

            if(existCity === undefined) {
                return [action.payload.data, ...currentState]; //List of cities; [new, oldArray]; [...state, newData] -> [oldArray, new]
            }
            else {
                //Found exist, cannot change position???
                currentState.splice(currentState.indexOf(existCity, 1));
                currentState.unshift(existCity);
                return currentState;
            }
            //return state.concat(action.payload.data) 和上面面ES6一样
            // Collect cities: state.push(action.payload.data)? Wrong!!! Do not mutating state
            //                 state.concat(action.payload.data) Good
    }
    return state;   //即使没有component尝试获取weather, 首次加载时这里也会被调用, 也就是initialState的作用。
}