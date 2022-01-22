import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="
                bg-indigo-500
                h-10
            ">
                <Link to='/' className="text-white h-full navBarLink m-5">Home</Link>
                <Link to='/newSurvey' className="text-white h-full navBarLink m-5">Create Survey</Link>      
                <Link to='/surveysList' className="text-white h-full navBarLink m-5">My Surveys</Link>  
        </div >
    );
}

export default Navbar;
