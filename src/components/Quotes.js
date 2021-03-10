import { useState } from "react";
    function Quotes( {items} ){
        const output = [];
        for (const i in items) {
            output.push(<q style={{color:"#00473B"}}>{items[i]} </q> );
          }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Quotes;