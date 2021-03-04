import { useState } from "react";

function Length( {} ) {
    const [length, setLength] = useState(0);
    return (
        <div className="Length">
            <input onChange={(event) => setLength(event.target.value.length)}type="text"/> {length}
        </div>
    );
}
export default Length;