import { useState } from "react";
    function Headers4( {items} ){
        const output = [];
        items.forEach(function (item, i) {
            output.push(<h4 style={{color: "blue"}}>{item}</h4>);
          });
        return(
            <ul>
                {output} 
            </ul>
        );
    }

export default Headers4;