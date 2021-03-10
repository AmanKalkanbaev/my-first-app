import { useState } from "react";
    function Headers3( {items} ){
        const output = [];
        items.forEach(function (item, i) {
            output.push(<h3 style={{color: "blue"}}>{item}</h3>);
          });
        return(
            <ul>
                {output} 
            </ul>
        );
    }

export default Headers3;