import { useState } from "react";

function Switch() {
    const [number, setNumber] = useState(0);
    return (
        <div className="Switch">
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increse</button>
            <button onClick={() => setNumber(number - 1)}>reduce</button>
        </div>
    );
}
export default Switch;