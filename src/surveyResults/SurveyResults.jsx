import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const SurveyResults = () => {
    const {title} = useParams();

    const [surveyResults, setSurveyResults] = React.useState();

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurveyResults(surveySelected);
        });
    }, []);
    
    return surveyResults ? 
        (
            <div>
                <h1>{surveyResults.title}</h1>
                <ul>
                    {surveyResults.questions.map(question => (
                        <li className="
                        bg-slate-200
                        m-5
                        border-t-4 border-indigo-500
                        break-all">
                            {
                                question.result !== null ?
                                    `${question.name + ' ' + question.result}`
                                :
                                `${question.name + ' ' + 'Not yet determined'}`
                            }
                        </li>
                    ))}
                </ul>
            </div>
        ) 
        :
        
        <h1>Loading</h1>

}

export default SurveyResults;
