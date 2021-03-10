import { useState } from "react";
    function Underline( {items} ){
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<em style={{color:"green"}}>{items[i]} </em>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Underline;