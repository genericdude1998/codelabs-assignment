import React from 'react';
import { Link } from 'react-router-dom';

const Survey = ({title, surveyId}) => {

    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/takeSurvey/:${title}`}>Take this Survey</Link>
        </div>
    );
}

export default Survey;
