import { useState } from "react";
    function Labele( {items} ){
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<label style={{color:"green"}}>{items[i]} </label>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Labele;