import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

    // const params = useParams(); /SOMETHING IS DIFFERENT, PARAMS WE HAVE
    let [searchParams] = useSearchParams();

    // console.log(searchParams.get('v'))

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("WatchPage")
        dispatch(closeMenu())
    }, [])

    return (
        <div className='w-full'>
            <div className='flex gap-2 w-full'>
                <div>
                    <iframe width="780" height="400" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <LiveChat />
            </div>
            <CommentsContainer />
        </div>

    )
}

export default WatchPage