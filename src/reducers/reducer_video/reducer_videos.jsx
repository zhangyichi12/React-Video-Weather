import { FETCH_VIDEOS } from '../../actions/action_video/action_video.jsx';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VIDEOS:
            return action.payload.data.items;
    }
    return state;
}