import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Surveydisplayer = () => {
    const {title} = useParams();

    // axios.post('/giveAnswer',{
    //     title,
    //     questionId:0,
    //     answer: true,
    // })
    
    const [survey, setSurvey] = React.useState();
    const [currentQuestion, setcurrentQuestion] = React.useState('');

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurvey(surveySelected);
            setcurrentQuestion(surveySelected.questions[0].name);
        });
    }, []);

    return (
        <div>
            <h1>{survey ? survey.title:'Loading'}</h1>
            <p>{currentQuestion}</p>
            <label>Yes</label>
            <input type="radio" />
            <label>No</label>
            <input type="radio" />
            <button>Previous</button>
            <button>Next</button>
        </div>
    );
}

export default Surveydisplayer;
