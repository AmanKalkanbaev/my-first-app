import { useState } from "react";
    function Headers2( {items} ){
        const output = [];
        items.forEach(function (item, i) {
            output.push(<h2 style={{color: "blue"}}>{item}</h2>);
          });
        return(
            <ul>
                {output} 
            </ul>
        );
    }

export default Headers2;