import React, { useState } from 'react';

function ThirdCharPrinter() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        printEveryThirdChar(e.target.value);
    };

    const printEveryThirdChar = (value) => {
        let result = '';
        for (let i = 2; i < value.length; i += 3) {
            result += value[i];
        }
        setOutputValue(result);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Output: {outputValue}</p>
        </div>
    );
}

export default ThirdCharPrinter;
