import React from 'react';

const VideoDetail = ({ videoSelect }) => {
    return (

        <div className='ui segment'>
            <div className="ui embed">
                <iframe title="videoPlayer" src={`https://www.youtube.com/embed/${videoSelect.id.videoId}`} />
            </div>

            <h4 className='ui header'>{videoSelect.snippet.title}</h4>
            <p>{videoSelect.snippet.description}</p>
        </div>)
}

export default VideoDetail