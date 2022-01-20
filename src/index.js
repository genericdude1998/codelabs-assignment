import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

axios.post('/createSurvey', {
    title: 'example title',
    questions: ['example questions'],
})

ReactDOM.render(<h1>Helloworld React!</h1>, document.getElementById('root'));