import React,{useContext} from 'react';
import context from '../../context';

const RightElements = () => {

    const {item1,item2,item3}=useContext
    (context).info;



    return (
        <>
         <div className='d-flex align-items-center'>
            {/* Icon */}
            <a href="#" className='text-reset me-3'>
                <i className='fas fa-shopping-cart'></i>
            </a>

            {/* Notification */}
            <div className="dropdown">
                <a 
                className='text-reset me-3 dropdown-toggle hidden-arrow'
                href="#"
                id='navbarDropdownMenuLink'
                role="button"
                data-mbd-tooggle="dropdown"
                aria-expanded="false"
                >
                    <i className='fas fa-bell'></i>
                    <span className='badge rounde-pill badge-notification bg-danger'>
                        1
                    </span>
                </a>
                <ul 
                className='dropdown-menu dropdown-menu-end'
                aria-aria-labelledby='navbarDropdownMenuLink'
                >
                    <li>
                        <a href="#" className='dropdown-item'>
                            {item1}
                        </a>
                    </li>
                    <li>
                        <a href="#" className='dropdown-item'>
                            {item2}
                        </a>
                    </li>
                    <li>
                        <a href="#" className='dropdown-item'>
                            {item3}
                        </a>
                    </li>

                </ul>
                
            </div>
         </div>
        </>
    );
};

export default RightElements;