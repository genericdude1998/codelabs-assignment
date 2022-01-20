import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Surveydisplayer = () => {
    const {title} = useParams();
    
    const [survey, setSurvey] = React.useState();
    const [currentQuestion, setcurrentQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState(null);

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => {
            const surveySelected = res.data[0];
            console.log(surveySelected);
            setSurvey(surveySelected);
            setcurrentQuestion(surveySelected.questions[0].name);
        });
    }, []);

    const onChangeAnswer = (e) => setAnswer(e.target.value === 'true');

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

                <button>Previous</button>
                <button>Next</button>
            </form>
        </div>
    );
}

export default Surveydisplayer;
