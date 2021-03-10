import { useState } from "react";
    function Headers5( {items} ){
        const output = [];
        items.forEach(function (item, i) {
            output.push(<h5 style={{color: "blue"}}>{item}</h5>);
          });
        return(
            <ul>
                {output} 
            </ul>
        );
    }

export default Headers5;