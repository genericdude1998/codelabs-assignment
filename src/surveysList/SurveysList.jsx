import axios from 'axios';
import React from 'react';
import Survey from './survey/Survey';

const SurveysList = () => {
    const [surveys, setSurveys] = React.useState([]);

    React.useEffect(() => {
        axios.get('/getSurveys').then(res => setSurveys(([...res.data])));
        return () => {
            setSurveys([]);
        };
    }, []);

    return (
        <div>
            <ul>
                {surveys.map(survey => (
                    <li>{<Survey title={survey.title}/>}</li>
                ))}
            </ul>
        </div>
    );
}

export default SurveysList;
