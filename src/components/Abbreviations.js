import { useState } from "react";
    function Abbreviations( {items} ){
        const output = items.map(item => <abbr style={{color: "red"}}>{item}</abbr>)
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Abbreviations;