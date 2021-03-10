import { useState } from "react";

function Calc( {} ) {
    const [num, setNum] = useState(0);
    const [numTwo, setNumTwo] = useState(0);
    const [sym, setSym] = useState("");
    return (
        <div className="Calc">
            <input onInput={(event) => setNum(event.target.value)} type="number"/> 
            <select onChange={({ target }) => setSym(target.value)}>
                <option value={"-" }>-</option>
                <option value={"+"} >+</option>
                <option value={"*"} >*</option> 
                <option value={"/"} >/</option>
            </select>
            <input onInput={(event) => setNumTwo(event.target.value)} type="number"/> {num}
        </div>
    );
}
export default Calc;