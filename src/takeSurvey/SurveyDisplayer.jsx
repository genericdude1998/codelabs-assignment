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
        if(onNext(e)){
            window.location.href = '/surveysList';
        }
    }
    const onNext = (e) => {
        e.preventDefault();
        if(answer !== null){
            setError('');
            SendAnswerAndClear();
            setcurrentQuestionID(prevQuestion => (
                prevQuestion === survey.questions.length - 1 ? 
                prevQuestion : prevQuestion + 1
            ));
            return true;
        }
        else{
            setError('No questions can be left blank');
            return false;
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
            <h1 className='text-center p-2'>{survey.title}</h1>
            <form className='flex flex-col p-2' className="
                        bg-slate-200
                        m-5
                        border-t-4 border-indigo-500
                        break-all">
                <p className='text-center m-5'>{survey.questions[currentQuestionId].name}</p>
                <div className='flex justify-around m-10'>
                    <div>
                        <label htmlFor='Yes'>Yes</label>
                        <input className='self-center'
                            type="radio" 
                            id="Yes" 
                            name='Answer' 
                            onChange={onChangeAnswer} 
                            value={'Yes'}
                            checked={answer === 'Yes'}
                        />
                    </div>

                    <div>
                        <label htmlFor='No'>No</label>
                        <input className='self-center'
                            type="radio" 
                            id="No" 
                            name='Answer' 
                            onChange={onChangeAnswer} 
                            value={'No'}
                            checked={answer === 'No'}
                        />
                    </div>
                </div>
                <div>
                    {currentQuestionId !== 0 ? 
                        <button className="m-1 button" onClick={onPrevious}>Previous</button> 
                            : 
                        null}
                    {currentQuestionId !== survey.questions.length - 1 ? 
                        <button className="m-1 button" onClick={onNext}>Next</button>
                            : 
                        <button className="m-1 button" onClick={onFinal}>Send</button>
                    } 
                </div>
            </form>
            <h5>{error ? error: null}</h5>
            <p>{`Question ${currentQuestionId + 1} of ${survey.questions.length}`}</p>
        </div>
    );
    }
       
    return <h1>Loading</h1>
}

export default SurveyDisplayer;
