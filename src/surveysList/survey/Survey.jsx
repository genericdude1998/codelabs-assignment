import React from 'react';
import { Link } from 'react-router-dom';

const Survey = ({title}) => {

    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/takeSurvey/${title}`}>Take this Survey</Link>
            <Link to={`/surveyResults/${title}`}>See Results</Link>

        </div>
    );
}

export default Survey;
