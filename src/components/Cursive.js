import { useState } from "react";
    function Cursive( {items} ){
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<i style={{color:"green"}}>{items[i]} </i>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Cursive;