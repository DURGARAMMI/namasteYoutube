import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center mb-2'>
            <img
                className="h-6 w-6"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <span className='font-bold px-2'>{name}</span>
            <span className='text-wrap'>{message}</span>
        </div>
    )
}

export default ChatMessage