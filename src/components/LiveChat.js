import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice'
import { generateRandomName, makeRandomMessages } from '../utils/helper'
import ChatMessage from './ChatMessage'



const LiveChat = () => {

    const dispatch = useDispatch()
    const [lievMessages, setLiveMessages] = useState()

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            //API polling
            console.log('api polling')
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: makeRandomMessages(20)
                }
            ))
            setLiveMessages("")
        }, 1500)
        return () => {
            clearInterval(i);
        }
    }, [])

    return (
        <>
            <div className='w-full'>
                <div className='border mb-2 border-black rounded-sm h-[400px] bg-slate-100 p-2 w-full overflow-auto flex flex-col-reverse'>
                    {chatMessages.map((message, index) => < ChatMessage key={index} name={message.name} message={message.message} />)}
                </div>
                <form className='w-full' onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "DurgaRamesh",
                        message: lievMessages
                    }))
                }}
                >
                    <input
                        className="border border-gray-400 w-10/12 rounded-l-full p-1 px-3"
                        type="text"
                        value={lievMessages}
                        onChange={(e) => setLiveMessages(e.target.value)}
                    />
                    <button className="border border-gray-400 p-1 w-2/12 bg-gray-100 rounded-r-full">
                        send
                    </button>
                </form>
            </div>
        </>
    )
}

export default LiveChat