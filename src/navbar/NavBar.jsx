import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="
                bg-indigo-500
            ">
                <Link to='/' className="text-white h-full text-xs navBarLink 
                ">Home</Link>
                <Link to='/newSurvey' className="text-white h-full text-xs ml-1 navBarLink
                ">Create Survey</Link>      
                <Link to='/surveysList' className="text-white h-full text-xs ml-1 navBarLink
                ">My Surveys</Link>  
        </div >
    );
}

export default Navbar;
