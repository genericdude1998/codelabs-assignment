import axios from 'axios';
import React from 'react';

import Survey from './survey/Survey';
import Navbar from '../navbar/NavBar';

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
            <Navbar />
            {surveys.length ? 
                <ul>
                {surveys.slice().reverse().map(survey => (
                    <li key={survey.title} className="
                    bg-slate-200
                    m-5
                    border-t-4 border-indigo-500 rounded
                    break-all
                    hover:scale-105
                    transition-transform">{<Survey title={survey.title}/>}</li>
                ))}
                </ul>
                :
                <h1>No Surveys Found!</h1>
            }
        </div>
    );
}

export default SurveysList;
