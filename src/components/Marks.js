import { useState } from "react";
    function Marks( {items} ){
        const output = items.map(item => <mark style={{color: "red"}}>{item}</mark>)
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Marks;