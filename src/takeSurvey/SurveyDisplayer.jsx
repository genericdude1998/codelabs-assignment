import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Surveydisplayer = () => {
    const {title} = useParams();
    
    const [survey, setSurvey] = React.useState();
    const [currentQuestion, setcurrentQuestion] = React.useState(0);
    const [answer, setAnswer] = React.useState(null);

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurvey(surveySelected);
        });
    }, []);

    const onChangeAnswer = (e) => setAnswer(e.target.value === 'true');
    const onNext = (e) => setcurrentQuestion(prevQuestion => {
        e.preventDefault();
        return prevQuestion === survey.questions.length - 1 ? prevQuestion : prevQuestion + 1
        }
    );
    const onPrevious = (e) => setcurrentQuestion(prevQuestion => {
        e.preventDefault();
        return prevQuestion === 0 ? prevQuestion : prevQuestion - 1
        }
    );

    return (
        <div>
            <h1>{survey ? survey.title:'Loading'}</h1>
            <p>{currentQuestion}</p>
            <form >
                <label htmlFor='Yes'>Yes</label>
                <input 
                    type="radio" 
                    id="Yes" 
                    name='Answer' 
                    onChange={onChangeAnswer} 
                    value={true}/>

                <label htmlFor='No'>No</label>
                <input 
                    type="radio" 
                    id="No" 
                    name='Answer' 
                    onChange={onChangeAnswer} 
                    value={false}/>

                <button onClick={onPrevious}>Previous</button>
                <button onClick={onNext}>Next</button>
            </form>
        </div>
    );
}

export default Surveydisplayer;
