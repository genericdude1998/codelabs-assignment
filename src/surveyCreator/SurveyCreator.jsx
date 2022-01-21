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
            <form className="
                w-full
                h-full
                bg-zinc-100
            ">
                <div className="
                    flex 
                    flex-col
                    items-center
                    m-2
                ">
                    <input className="
                        text-center
                        bg-zinc-100
                        outline-none
                    "
                    type="text" placeholder='Title' onChange={onChangeTitle} value={title}/>
                </div>
                <br />
                <label>Questions</label>
                <div className="
                    flex 
                    flex-col
                ">
                    <ul>
                        {questions.map(quest => (
                            <li className="
                                bg-slate-200
                                m-5
                                border-t-4 border-indigo-500
                                break-all
                            ">{quest.name}</li>
                        ))}
                    </ul>
                    <textarea className="
                       bg-slate-200
                       m-5
                       border-t-4 border-indigo-500
                       break-all 
                    " 
                    type="text" 
                    onChange={onChangeNewQuestion} 
                    value={newQuestion} 
                    placeholder={'What is your question?'}/>
                </div>
                <button onClick={onAddQuestion}>Add Question</button>
                <br />
                <button className="
                    block
                    ml-auto
                "
                type="submit" onClick={onSendSurvey}>Send</button>
            </form>
            {error ? <h5>{error}</h5> : null}
        </>
    );
}

export default SurveyCreator;
