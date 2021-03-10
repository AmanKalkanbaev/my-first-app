import { useState } from "react";
    function Strongs( {items} ){
        const output = items.map(item => <strong style={{color: "red"}}>{item} <br/></strong>)
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Strongs;