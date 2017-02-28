import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectVideo } from '../../actions/action_video/action_video';

// const VideoList = (props) => {
//     const videoList = props.videos.map((video) => {
//         return (
//             <VideoListItem
//                 video={video}
//                 key={video.etag}
//                 chooseVideo={props.chooseVideo}
//             />
//         )
//     });
//
//     return (
//         <ul className="list-group">
//             {videoList}
//         </ul>
//     );
// };

class VideoList extends Component {
    componentDidMount() {
        if(this.props.videos != 0) {
            this.props.selectVideo(this.props.videos[0]);
        }
    }

    renderListItem() {

        return this.props.videos.map((video) => {   //.map挡掉了[]报错的情况
            return (
                <li
                    className='list-group-item'
                    onClick={() => this.props.selectVideo(video)}
                    key={video.etag}
                >
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object"
                                 src={video.snippet.thumbnails.default.url}
                            />
                        </div>
                        <div className="media-body">
                            <div className="media-heading">
                                {video.snippet.title}
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className='list-group'>
                {this.renderListItem()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);