import { useState } from "react";
    function Inserted( {items} ){
        const output = [];
        for (const i in items) {
            output.push(<ins style={{color:"#00473B"}}>{items[i]} </ins> );
          }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Inserted;