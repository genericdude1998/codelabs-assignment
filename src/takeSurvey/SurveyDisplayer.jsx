import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Surveydisplayer = () => {
    const {title} = useParams();
    
    const [survey, setSurvey] = React.useState();
    const [currentQuestionId, setcurrentQuestionID] = React.useState(0);
    const [answer, setAnswer] = React.useState(null);

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurvey(surveySelected);
        });
    }, []);

    const onChangeAnswer = (e) => setAnswer(e.target.value === 'true');
    const onNext = (e) => {
            e.preventDefault();
            setcurrentQuestionID(prevQuestion => (
                prevQuestion === survey.questions.length - 1 ? 
                prevQuestion : prevQuestion + 1
            )
        );
        onSendAnswer();
    }
    const onPrevious = (e) => setcurrentQuestionID(prevQuestion => {
        e.preventDefault();
        return prevQuestion === 0 ? prevQuestion : prevQuestion - 1
        }
    );
    const onSendAnswer = () => {

        axios.post('/giveAnswer', {
        title: title,
        questionId: currentQuestionId,
        answer: answer
        });
    }

    if(survey){

        return (
        <div>
            <h1>{survey.title}</h1>
            <p>{survey.questions[currentQuestionId].name}</p>
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
                {currentQuestionId === survey.questions.length - 1 ? <button>Send</button> : null}
            </form>
        </div>
    );
    }
       
    return <h1>Loading</h1>
}

export default Surveydisplayer;
