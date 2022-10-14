import React from "react";


const TableRow = ({data:{id,isname,age},num, del } ) => {
    console.log(num);
    return (
        <>
        <tr>
            <td>{num}</td> <td>{isname}</td> <td>{age}</td> 
            <td><button className="btn btn-danger" onClick={()=>del(id)}>delte</button></td>
        </tr>
        </>
    );
};

export default TableRow;