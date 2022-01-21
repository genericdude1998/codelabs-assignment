import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/NavBar';

const SurveyDisplayer = () => {
    const {title} = useParams();
    
    const [survey, setSurvey] = React.useState();
    const [currentQuestionId, setcurrentQuestionID] = React.useState(0);
    const [answer, setAnswer] = React.useState(null);
    const [error, setError] = React.useState('');


    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurvey(surveySelected);
        });
    }, []);

    const onChangeAnswer = (e) => setAnswer(e.target.value);
    const SendAnswerAndClear = () => {
        axios.post('/giveAnswer', {
        title: title,
        questionId: currentQuestionId,
        answer: answer
        });

        setAnswer(null);
    }
    const onFinal = (e) => {
        onNext(e);
        window.location.href = '/surveysList';
    }
    const onNext = (e) => {
        e.preventDefault();
        if(answer !== null){
            SendAnswerAndClear();
            setcurrentQuestionID(prevQuestion => (
                prevQuestion === survey.questions.length - 1 ? 
                prevQuestion : prevQuestion + 1
            ));

        }
        else{
            setError('No questions can be left blank');
        }
    }
    const onPrevious = (e) => setcurrentQuestionID(prevQuestion => {
        e.preventDefault();
        return prevQuestion === 0 ? prevQuestion : prevQuestion - 1
        }
    );

    if(survey){

        return (
        <div>
            <Navbar />
            <h1>{survey.title}</h1>
            <p>{survey.questions[currentQuestionId].name}</p>
            <form >
                <label htmlFor='Yes'>Yes</label>
                <input 
                    type="radio" 
                    id="Yes" 
                    name='Answer' 
                    onChange={onChangeAnswer} 
                    value={'Yes'}
                    checked={answer === 'Yes'}
                />

                <label htmlFor='No'>No</label>
                <input 
                    type="radio" 
                    id="No" 
                    name='Answer' 
                    onChange={onChangeAnswer} 
                    value={'No'}
                    checked={answer === 'No'}
                />

                {currentQuestionId !== 0 ? 
                    <button onClick={onPrevious}>Previous</button> 
                        : 
                    null}
                {currentQuestionId !== survey.questions.length - 1 ? 
                    <button onClick={onNext}>Next</button>
                        : 
                    <button onClick={onFinal}>Send</button>
                } 
            </form>
            <h5>{error ? error: null}</h5>
            <p>{`Question ${currentQuestionId + 1} of ${survey.questions.length}`}</p>
        </div>
    );
    }
       
    return <h1>Loading</h1>
}

export default SurveyDisplayer;
