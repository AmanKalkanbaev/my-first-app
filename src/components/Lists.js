import { useState } from "react";
    function Lists( {items} ){
        const output = [];
        for (const item of items) {
            output.push(<li>{item}</li>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Lists;