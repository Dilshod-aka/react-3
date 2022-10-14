
import React,{useContext} from 'react';
import context from '../../context';
const Comp3 = () => {

const msg=useContext(context);

    return (
        <div className='p-5 bg-info'>
            <h3>Components 3</h3>
            <h4>{msg.message}</h4>
        </div>
    );
};

export default Comp3;