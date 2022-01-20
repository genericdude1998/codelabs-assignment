import axios from 'axios';
import React from 'react';
import Survey from './survey/Survey';
import { Link } from 'react-router-dom';

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
            <Link to='/'>Home</Link>
            {surveys.length ? 
                <ul>
                {surveys.map(survey => (
                    <li>{<Survey title={survey.title}/>}</li>
                ))}
                </ul>
                :
                <h1>No Surveys Found!</h1>
            }
        </div>
    );
}

export default SurveysList;
