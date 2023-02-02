import './inputCollect.css';

function InputCollect(){
    return (
        <div className="input__container">
            <h1>Congratulations everyone</h1>
            <div className="input__field">
                <input placeholder='First Number' type="number" />
                <input placeholder='Second Number' type="number" />
            </div>
            <div className="operator">
                <button>+</button>
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