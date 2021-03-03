import { useState } from "react";

function Miror() {
    const [miror, setMiror] = useState("");
    return (
        <div className="Miror">
            <input value={miror} onInput={(event) => setMiror (event.target.value)}/>
            <input value={miror} onInput={(event) => setMiror(event.target.value)}/>
        </div>
    );
}
export default Miror;