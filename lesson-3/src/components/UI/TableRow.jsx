import React from "react";


const TableRow = ({data:{id,isname,age},num } ) => {
    console.log(num);
    return (
        <>
        <tr>
            <td>{num}</td> <td>{isname}</td> <td>{age}</td>
        </tr>
        </>
    );
};

export default TableRow;