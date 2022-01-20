import axios from 'axios';
import React from 'react';

const SurveyCreator = () => {

    const [title, setTitle] = React.useState('newTitle');
    const [newQuestion, setNewQuestion] = React.useState('newQuestion');
    const [questions, setQuestions] = React.useState(['oldQuestion']);

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeNewQuestion = (e) => setNewQuestion(e.target.value);
    const onAddQuestion = (e) => {
        e.preventDefault();
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    }
    
    const onSendSurvey = () => {
        axios.post('/createSurvey', {
            title: title,
            questions: [...questions],
        });
    }

    return (
        <form>
            <label>Title</label>
            <input type="text" onChange={onChangeTitle}/>
            <br />
            <label>Questions</label>
            <ul>
                {questions.map(quest => (
                    <li>{quest}</li>
                ))}
            </ul>
            <input type="text" onChange={onChangeNewQuestion}/>
            <button onClick={onAddQuestion}>Add Question</button>
            <br />
            <button type="submit" onClick={onSendSurvey}>Send</button>
        </form>
    );
}

export default SurveyCreator;
