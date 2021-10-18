import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    // console.log(props.videos);
    const items = videos.map( (video) => {
        return (
            <VideoItem onVideoSelect={onVideoSelect} item = {video} key={video.id.videoId}/>
        )
    });
    return (
        <div className="ui relaxed divided list">
            {items}
        </div>
    )
}


export default VideoList;