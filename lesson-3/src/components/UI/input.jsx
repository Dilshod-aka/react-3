import React from "react";


const Input = ({type, pl, val, setVal}) => {

    return ( 
        <>
            <input type={type} id="form12" className="form-control border-dark 
            border-1 w-50 mx-auto p-3 my-2" placeholder={pl} value={val} onChange={(e)=>{setVal(e.target.value);}}
            />
        </> 
    );
};

export default Input;