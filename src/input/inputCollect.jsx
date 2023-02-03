import { useState } from 'react';
import './inputCollect.css';

function InputCollect(){
    // let number1, number2;

    const [result, setResult] = useState(0);

    const [num1, setNum1] = useState(0);
    const firstNumber = (event)=>{
        setNum1(Number(event.target.value));
    }

    const [num2, setNum2] = useState(0);
    const secondNumber = (event)=>{
        setNum2(Number(event.target.value));
    }

    function addNumbers(){
        setResult(num1 + num2);
    }

    function subNumbers(){
        setResult(num1 - num2);
    }

    function mulNumbers(){
        setResult(num1 * num2);
    }

    function divNumbers(){
        setResult(num1 / num2);
    }

    function modNumbers(){
        setResult(num1 % num2);
    }

    return (
        <div className="input__container">
            <h1>Congratulations everyone</h1>
            <div className="input__field">
                <input onChange={firstNumber} placeholder='First Number' type="number" />
                <input onChange={secondNumber} placeholder='Second Number' type="number" />
            </div>
            <div className="operator">
                <button onClick={addNumbers}>+</button>
                <button onClick={subNumbers}>-</button>
                <button onClick={mulNumbers}>*</button>
                <button onClick={divNumbers}>/</button>
                <button onClick={modNumbers}>%</button>
            </div>

            <div className='output'>
                <h1>Answer: {result}</h1>
            </div>
        </div>
    );
}

export default InputCollect;