import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="
                bg-indigo-500
                h-10
            ">
                <Link to='/' className="text-white h-full text-xs m-1 navBarLink sm:text-base
                    sm:m-2
                ">Home</Link>
                <Link to='/newSurvey' className="text-white h-full text-xs m-1 navBarLink sm:text-base
                    sm:m-2
                ">Create Survey</Link>      
                <Link to='/surveysList' className="text-white h-full text-xs m-1 navBarLink sm:text-base
                    sm:m-2
                ">My Surveys</Link>  
        </div >
    );
}

export default Navbar;
