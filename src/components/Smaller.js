import { useState } from "react";
    function Smaller( {items} ){
        const output = [];
        for (const i in items) {
            output.push(<small style={{color:"#00473B"}}>{items[i]} </small> );
          }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Smaller;