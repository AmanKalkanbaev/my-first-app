import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    return (
        <div className="Name">
            <h1>My name is "{name}" </h1>
            <input onInput={(event) => setName(event.target.value)}/>
        </div>
    );
}
export default Name;