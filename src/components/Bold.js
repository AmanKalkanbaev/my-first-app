import { useState } from "react";
    function Bold( {items} ){
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<b style={{color:"green"}}>{items[i]} </b>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Bold;