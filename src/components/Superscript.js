import { useState } from "react";
    function Superscript( {items} ){
        const output = [];
        for (const i in items) {
            output.push(<sup style={{color:"#00473B"}}>{items[i]} </sup> );
          }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Superscript;