import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVideos, fetchOneVideo } from '../../actions/action_video/action_video.jsx';

import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './video_detail.jsx';
import Nav from '../../components/Nav.jsx';

  //downwards data flow

class VideoApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos('');
        this.props.fetchOneVideo('');
    }

    render() {
        return (
            <div>
                <Nav active='video'/>
                <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <SearchBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetail />
                    </div>
                    <div className="col-md-4">
                        <VideoList />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideos, fetchOneVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoApp);