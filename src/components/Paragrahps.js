import { useState } from "react";
    function Paragrahps( {items} ){
        const output = items.map(item => <p style={{color: "red"}}>{item}</p>)
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Paragrahps;