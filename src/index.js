import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

axios.post('/createSurvey', {
    title: 'example title',
    questions: ['example questions'],
})

ReactDOM.render(<App />, document.getElementById('root'));