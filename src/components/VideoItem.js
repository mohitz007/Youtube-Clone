import React from 'react';
import './VideoItem.css'

const VideoItem = ({item,onVideoSelect}) => {
    // const video=props.item;
    // console.log(video);
    // console.log(item.id.videoId);
    // console.log(onVideoSelect);
    return (
        <div className="video-item item" onClick={()=>{onVideoSelect(item)}}>
            <img className="ui image" src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
            <div className="content">
                <div className="header">
                    {item.snippet.title}
                </div>
                <p className="description"><br/>{item.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoItem;