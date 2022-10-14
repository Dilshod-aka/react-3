import React,{useContext} from 'react';
import Comp3 from './Comp3';
import context from '../../context';

const Comp2 = () => {
    const data=useContext(context);
    return (
        <div className='p-5 bg-warning'>
            <h3>Components 2</h3>
            <h4>{data.message}</h4>
            <Comp3/>
        </div>
        
    );
};

export default Comp2;