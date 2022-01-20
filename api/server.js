const express = require('express');
const surveys = require('./surveys');
const devServer = (devServer) => {
    const app = devServer.app;

    app.use(express.json());

    app.post('/createSurvey', (req,res) => {
        const title = req.body.title;
        const questions = req.body.questions;

        surveys.push({title, questions});
        console.log(surveys);
        res.json(surveys);
    });

    app.post('/giveAnswer', (req,res) => {
        const title = req.body.title;
        const questionId = req.body.questionId;
        const answer = req.body.answer;

        const surveyIndex = surveys.map(survey => survey.title).indexOf(title);
        surveys[surveyIndex].questions[questionId].result = answer;

        console.log(surveys);
        res.json(surveys);
    });

    app.post('/createSurvey', (req,res) => {
        const title = req.body.title;
        const questions = req.body.questions;

        surveys.push({title, questions});
        console.log(surveys);
        res.json(surveys);
    });

    app.get('/getSurveys', (req,res) => {
        console.log(surveys);
        res.json(surveys);
    });

    app.get('/getSurveys/:title', (req,res) => {
        console.log(req.params.title);
        if(surveys.filter(survey => survey.title === req.params.title)){
            console.log(surveys.filter(survey => survey.title === req.params.title))
            res.json(surveys.filter(survey => survey.title === req.params.title));
        }
        res.json(surveys);
    });
}

module.exports = devServer;