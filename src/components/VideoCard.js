import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info)
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='p-2 m-2 w-52 shadow-lg'>
            {/* {videos.map((video, index) => {
                return (
                    <div key={index}>
                        <h3>{video.snippet.title}</h3>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    </div>
                )
            })} */}
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumb" />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export const AddVideoCard = ({ info }) => {
    return <div className="bg-red-200">

        <VideoCard info={info} />
        <p>Add***</p>
    </div>
}

export default VideoCard