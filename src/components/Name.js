import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    let example = {
        transform: "scaleX(-1)",
    }
    return (
        <div className="Name">
            <input onInput={(event) => setName(event.target.value)}/> <div style={example}>{name}</div>
        </div>
    );
}
export default Name;