import { SELECT_VIDEO, FETCH_ONE_VIDEO } from '../../actions/action_video/action_video.jsx';

const initialState = null;

export default (state = initialState, action) => {
    switch(action.type) {
        case SELECT_VIDEO:
            return action.paylaod;
        case FETCH_ONE_VIDEO:
            return action.payload.data.items[0];
    }
    return state;
}