import { useState } from "react";

function Calc( {} ) {
    const [num, setNum] = useState(0);
    const [numTwo, setNumTwo] = useState(0);
    const [sim, setSim] = useState(0);
    return (
        <div className="Calc">
            <input onInput={(event) => setNum(event.target.value)}type="number"/> 
            <select onChange={(event) => setSim(event.this.value)}>
                <option >-</option>
                <option >+</option>
                <option >*</option> 
                <option >/</option>
            </select>
            <input onInput={(event) => setNumTwo(event.target.value)}type="number"/>  
        </div>
    );
}
export default Calc;