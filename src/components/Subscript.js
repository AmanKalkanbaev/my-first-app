import { useState } from "react";
    function Subscript( {items} ){
        const output = [];
        for (const i in items) {
            output.push(<sub style={{color:"#00473B"}}>{items[i]} </sub> );
          }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Subscript;