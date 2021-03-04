import { useState } from "react";

function Range( {min, max} ) {
    const [number, setRange] = useState(0);
    return (
        <div className="Range">
            <input onChange={(event) => setRange(event.target.value)} value={number} min={min} max={max} type="range"></input> {number}/{max}
            
        </div>
    );
}
export default Range;