import axios from 'axios';
import React from 'react';
import Survey from './survey/Survey';

const SurveysList = () => {
    const [surveys, setSurveys] = React.useState([]);
    React.useEffect(() => {
        return () => {
            setSurveys([]);
        };
    }, [input]);
    
    return (
        <div>
            <ul>
                {surveys.map(survey => (
                    <li>{<Survey title={survey.name}/>}</li>
                ))}
            </ul>
        </div>
    );
}

export default SurveysList;
