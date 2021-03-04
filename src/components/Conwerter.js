import { useState } from "react";

function Conwerter() {
    const [number, setNumber] = useState(0);
    return (
        <div className="Conwerter">
            $<input onChange={(event) => setNumber(85 * event.target.value)} type="number"></input> {number} Som
            
        </div>
    );
}
export default Conwerter;