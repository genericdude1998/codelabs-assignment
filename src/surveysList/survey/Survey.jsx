import React from 'react';
import { Link } from 'react-router-dom';

const Survey = ({title}) => {

    return (
        <div>
            <h1>{title}</h1>
            <Link className="text-amber-400 h-full navBarLink" to={`/takeSurvey/${title}`}>Take this Survey</Link>
            <Link className="text-amber-400 h-full navBarLink" to={`/surveyResults/${title}`}>See Results</Link>

        </div>
    );
}

export default Survey;
