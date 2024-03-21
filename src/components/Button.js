import React from 'react'


const Button = ({ name }) => {

    return (
        <div className='px-1'>
            <button className='p-2 px-5 my-5 mx-2 bg-gray-200 rounded-lg shadow-md bg-blend-color-dodge'>{name}</button>
        </div>
    )
}

export default Button