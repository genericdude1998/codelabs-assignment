import axios from 'axios';
import React from 'react';

import {GrAddCircle} from 'react-icons/gr';
import Navbar from '../navbar/NavBar';

const SurveyCreator = () => {

    const [title, setTitle] = React.useState('');
    const [newQuestion, setNewQuestion] = React.useState('');
    const [questions, setQuestions] = React.useState([]);
    const [openQuestion, setopenQuestion] = React.useState(false);
    const [error, setError] = React.useState('');
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    };
    const onChangeNewQuestion = (e) => setNewQuestion(e.target.value);
    const onOpenQuestion = () => setopenQuestion((prevValue) => !prevValue);
    const onAddQuestion = (e) => {
        e.preventDefault();
        if(newQuestion){
            setQuestions((prevQuestions) => [...prevQuestions, {name: newQuestion, result: null}]);
            setNewQuestion('');
            setopenQuestion(false);
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
        }).then(res => {
            setError(res.data);

            if(!res.data){
                window.location.href = '/surveysList';
            }
        });
    }

    return (
        <div className="
        w-screen
        h-screen
        bg-zinc-100
    ">
            <Navbar />

            <form className="
                 w-full
                 h-full
                bg-zinc-100
                p-3
            ">
                <div className="
                    flex 
                    flex-col
                    items-center
                    p-2
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
                                border-t-4 border-indigo-500 rounded
                                break-all
                            ">{quest.name}</li>
                        ))}
                    </ul>
                    {openQuestion ? 
                        <>
                            <textarea className="
                            bg-slate-200
                            m-5
                            border-t-4 border-indigo-500
                            rounded
                            break-all
                            outline-none
                            hover:scale-105
                            transition-transform
                            " 
                            type="text" 
                            onChange={onChangeNewQuestion} 
                            value={newQuestion} 
                            placeholder={'What is your question?'}/>
                            <button onClick={onAddQuestion} className>Add Question</button>
                        </>
                        :
                        <GrAddCircle className="
                        block
                        mt-5
                        "
                        size={30}
                        onClick={onOpenQuestion} 
                        />
                }
                </div>
                <br />
                <button className="
                    block
                    ml-auto
                    button
                "
                type="submit" onClick={onSendSurvey}>Send</button>
                {error ? <h5>{error}</h5> : null}
            </form>
        </div>
    );
}

export default SurveyCreator;
