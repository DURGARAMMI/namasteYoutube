import React from 'react'
import Button from './Button'

const buttonList = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "News", "Cooking", "Vlantines", "Paintings"]

const ButtonList = () => {

    return (
        <div className='flex'>
            {buttonList.map((button, index) => <Button key={index} name={buttonList[index]} />)}
            {/* <Button name="All" />
            <Button name="Gaming" />
            <Button name="Songs" />
            <Button name="Live" />
            <Button name="Soccer" />
            <Button name="Cricket" />
            <Button name="News" />
            <Button name="Cooking" />
            <Button name="Valentines" /> */}
        </div>
    )
}

export default ButtonList