import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
<div className="h-screen w-full flex items-center flex-col sm:flex-row">
    <div className="
            text-gray-100 shadow-lg 
            shadow-gray-300 
            w-1/2 m-10 h-1/2
            bg-gradient-to-br from-gray-800 to-gray-400 
            rounded
            flex
            justify-center
            items-center
            hover:scale-110
            transition-transform"
        >
        <Link to={'/newSurvey'}
        className="
            w-full
            h-full
            text-center
            textAlignVertical"
        >New Survey</Link>
    </div>

    <div className="
        text-gray-100 shadow-lg  
        shadow-purple-200 
        m-10 w-1/2 h-1/2
        rounded 
        bg-gradient-to-bl 
        from-purple-300 to-blue-900
        flex
    justify-center
        items-center
        hover:scale-110">
        <Link to={'/surveysList'}
        className="
            w-full
            h-full
            text-center
            textAlignVertical
            hover:scale-110
            transition-transform
        ">Your Surveys</Link>
    </div>
</div>
    );
}

export default Home;


