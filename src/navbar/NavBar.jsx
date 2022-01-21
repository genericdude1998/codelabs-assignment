import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="
                bg-indigo-500
                h-10
                
            ">
                <Link to='/' className="text-white h-full navBarLink">Home</Link>    
        </div >
    );
}

export default Navbar;
