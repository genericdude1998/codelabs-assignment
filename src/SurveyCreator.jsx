import React from 'react';

const SurveyCreator = () => {

    const [title, setTitle] = React.useState('newTitle');
    const [questions, setQuestions] = React.useState(['newQuestion']);


    return (
        <form>
            <label>Title</label>
            <input type="text" />
            <br />
            <label>Questions</label>
            <ul>
                {questions.map(quest => (
                    <li>{quest}</li>
                ))}
            </ul>
            <input type="text" />
            <button>Add Question</button>
            <br />
            <button type="submit">Send</button>
        </form>
    );
}

export default SurveyCreator;
