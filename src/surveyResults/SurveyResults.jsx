import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import NavBar from '../navbar/NavBar';

const SurveyResults = () => {
    const {title} = useParams();

    const [surveyResults, setSurveyResults] = React.useState();

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            setSurveyResults(surveySelected);
        });
    }, []);
    
    return surveyResults ? 
        (
            <div>
                <NavBar />
                <h1 className='text-center'>{surveyResults.title}</h1>
                <ul>
                    <h4>{'Survey Results:'}</h4>
                    {surveyResults.questions.map((question,index) => (
                        <li key={`${question.name} ${index}`}className="
                        bg-slate-200
                        m-5
                        border-t-4 border-indigo-500 rounded
                        break-all">
                            {
                                question.result !== null ?
                                    <div className="flex justify-between">
                                        <h2 className="ml-2">{question.name}</h2>
                                        <p className="mr-2">{question.result}</p>
                                    </div>
                                :
                                    <div className="flex justify-between">
                                        <h2>{question.name}</h2>
                                        <p>{'Not yet determined'}</p>
                                    </div>
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
