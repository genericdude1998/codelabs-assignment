import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={"max-w-sm rounded overflow-hidden shadow-lg"}>
            <Link to={'/newSurvey'}>Create a new Survey</Link>
            <Link to={'/surveysList'}>Your Surveys</Link>
            {/* <Link to={'/takeSurvey'}>Take a Survey</Link> */}
        </div>
    );
}

export default Home;
