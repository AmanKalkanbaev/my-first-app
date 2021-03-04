import { useState } from "react";

function Color() {
    const [color, setColor] = useState();
    return (
        <div className="Color">
            <input onChange={(event) => setColor(event.target.value)} type="color"/> 
            <p>{color}</p>
            
        </div>
    );
}
export default Color;