import axios from 'axios';
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = '***YOUR_API_KEY***';

export const SELECT_VIDEO = 'SELECT_VIDEO';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_ONE_VIDEO = 'FETCH_ONE_VIDEO';

export function selectVideo(video) {
    return {
        type: SELECT_VIDEO,
        paylaod: video
    }
}

export function fetchVideos(term) {
    // YTSearch({key: API_KEY, term: term}, (videos) => {   //wrong
    //     selectVideo(videos[0]);
    //     rrr(videos);
    // });
    const params = {
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video'
    };

    return {
        type: FETCH_VIDEOS,
        payload: axios.get(ROOT_URL, { params })
    }
}

// function rrr(payload) {  //wrong
//     return {
//         type: FETCH_VIDEOS,
//         payload: payload
//     }
// }

export function fetchOneVideo(term) {
    const params = {
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video',
        maxResults: 1
    };

    return {
        type: FETCH_ONE_VIDEO,
        payload: axios.get(ROOT_URL, { params })
    }
}