import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API_KEY } from '../utils/constants';
import VideoCard, { AddVideoCard } from './VideoCard';

const VideoContainer = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_API_KEY);
        const data = await response.json();
        // console.log(data.items);
        setVideos(data.items)
    }

    return (
        <div className='flex flex-wrap'>
            {videos[0] && <AddVideoCard info={videos[0]} />}
            {videos.map((video) =>
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCard info={video} />
                </Link>
            )}
        </div>
    )
}

export default VideoContainer