import React, { Component } from 'react';
import { connect } from 'react-redux';

// const videoDetail = ({video}) => {
//     if(!video) {
//         return <div>Loading...</div>
//     };
//
//     const YTUrl = `https:www.youtube.com/embed/${video.id.videoId}`;
//
//     return (
//         <div className="video-detail">
//             <div className="embed-responsive embed-responsive-16by9">
//                 <iframe className="embed-responsive-item" src={YTUrl}></iframe>
//             </div>
//             <div className="details">
//                 <div>{video.snippet.title}</div>
//                 <div>{video.snippet.description}</div>
//             </div>
//         </div>
//     )
// };

class VideoDetail extends Component {
    render() {
        if(this.props.activeVideo === null) {
            return <div>
                Loading...
            </div>
        }
        const YTUrl = `https:www.youtube.com/embed/${this.props.activeVideo.id.videoId}`;
        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={YTUrl}></iframe>
                </div>
                <div className="details">
                    <div>{this.props.activeVideo.snippet.title}</div>
                    <div>{this.props.activeVideo.snippet.description}</div>
                </div>
            </div>   
        );
    };
}

function mapStateToProps(state) {
    return {
        activeVideo: state.activeVideo
    }
}

export default connect(mapStateToProps)(VideoDetail);