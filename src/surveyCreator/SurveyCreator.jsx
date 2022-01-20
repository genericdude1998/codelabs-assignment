import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const SurveyCreator = () => {

    const [title, setTitle] = React.useState('');
    const [newQuestion, setNewQuestion] = React.useState('');
    const [questions, setQuestions] = React.useState([]);
    const [error, setError] = React.useState('');
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    };
    const onChangeNewQuestion = (e) => setNewQuestion(e.target.value);
    const onAddQuestion = (e) => {
        e.preventDefault();
        if(newQuestion){
            setQuestions((prevQuestions) => [...prevQuestions, {name: newQuestion, result: null}]);
            setNewQuestion('');
        }
        else{
            setError('No blank comments!');
        }
    }
    
    const onSendSurvey = (e) => {
        e.preventDefault();
        if(!title){
            setError('You need a title to begin');
            return;
        }
        if(questions.length === 0){
            setError('You need at least one question to begin');
            return;
        }
        axios.post('/createSurvey', {
            title: title,
            questions: [...questions],
        }).then(res => setError(res.data));

        setTitle('');
        setQuestions([]);

    }

    return (
        <>
            <Link to='/'>Home</Link>
            <form>
                <label>Title</label>
                <input type="text" onChange={onChangeTitle} value={title}/>
                <br />
                <label>Questions</label>
                <ul>
                    {questions.map(quest => (
                        <li>{quest.name}</li>
                    ))}
                </ul>
                <input type="text" onChange={onChangeNewQuestion} value={newQuestion}/>
                <button onClick={onAddQuestion}>Add Question</button>
                <br />
                <button type="submit" onClick={onSendSurvey}>Send</button>
            </form>
            {error ? <h5>{error}</h5> : null}
        </>
    );
}

export default SurveyCreator;
