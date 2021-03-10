import { useState } from "react";
    function ListsTable( {items} ){
        const output = [];
        const outpat = [];
        for (const item of items) {
            output.push(<tr>{item}</tr>);
        }
        for (const item of items) {
            outpat.push(<td>{item}</td>);
        }
        return(
            <table>
                
                {outpat}
                {output}
            </table>
        );
    }

export default ListsTable;