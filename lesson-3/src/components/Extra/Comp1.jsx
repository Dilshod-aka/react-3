import React from 'react';
import Comp2 from './Comp2';

const Comp1 = ({msg}) => {
    return (
        <div className='p-5 bg-danger'>
            <h3>Components 1</h3>
            <h4>{msg}</h4>
            <Comp2 msg={msg}/>
        </div>
    );
};

export default Comp1;