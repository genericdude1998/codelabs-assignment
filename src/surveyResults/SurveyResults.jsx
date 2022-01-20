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
                        <li>
                            {`${question.name + ' ' + question.result}`}
                        </li>
                    ))}
                </ul>
            </div>
        ) 
        :
        
        <h1>Loading</h1>

}

export default SurveyResults;
