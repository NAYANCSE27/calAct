import { useState } from 'react';
import './inputCollect.css';

function InputCollect(){
    // let number1, number2;
    const [num1, setNum1] = useState(0);
    const firstNumber = (event)=>{
        setNum1(Number(event.target.value));
    }

    const [num2, setNum2] = useState(0);
    const secondNumber = (event)=>{
        setNum2(Number(event.target.value));
    }

    function addNumbers(){
        let ans = num1+num2;
        console.log(ans);
    }

    return (
        <div className="input__container">
            <h1>Congratulations everyone</h1>
            <div className="input__field">
                <input onChange={firstNumber} placeholder='First Number' type="number" />
                <input onChange={secondNumber} placeholder='Second Number' type="number" />
            </div>
            <div className="operator">
                <button onClick={addNumbers()}>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>%</button>
            </div>

            <div className='output'>
                <h1>This is for output..</h1>
            </div>
        </div>
    );
}

export default InputCollect;