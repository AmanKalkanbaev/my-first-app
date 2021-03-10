import { useState } from "react";
    function Articles( {items} ){
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<article style={{color:"green"}}>{items[i]} </article>);
        }
        return(
            <ul>
                {output}
            </ul>
        );
    }

export default Articles;