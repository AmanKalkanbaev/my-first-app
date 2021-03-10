import { useState } from "react";
    function Headers( {items} ){
        const output = [];
        items.forEach(function (item, i) {
            output.push(<h1 style={{color: "blue"}}>{item}</h1>);
          });
        return(
            <ul>
                {output} 
            </ul>
        );
    }

export default Headers;