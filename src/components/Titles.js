import { useState } from "react";
    function Titles( {items} ){
        const output = items.map(item => <title style={{color: "red"}}>{item}</title>)
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Titles;