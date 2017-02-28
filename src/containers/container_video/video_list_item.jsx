import React from 'react';

const VideoListItem = ({ video, chooseVideo }) => {  //(props)=>{
    //const video = props.video;

    return (
        <li className="list-group-item" onClick={() => chooseVideo(video)}> {/*不能写成 onClick={chooseVideo},
                                                                             不是因为this指向不明,
                                                                             而是因为没有办法让video被带入参数*/}
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;