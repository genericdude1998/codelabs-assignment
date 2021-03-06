const express = require('express');
const fs = require('fs');

const surveysPath = '/home/enzo-develop/Desktop/develop/WebDev/develop/codelabs-assignment/api/surveys.json';

const devServer = (devServer) => {
    const app = devServer.app;

    app.use(express.json());

    app.post('/createSurvey', (req,res) => {
        const title = req.body.title;
        const questions = req.body.questions;

        const surveysJSON = JSON.parse(fs.readFileSync(surveysPath));
        
        if(surveysJSON.length && surveysJSON.filter(survey => survey.title === title).length){
            res.json('A survey with this name already exists!');
            return;
        }

        surveysJSON.push({title, questions});

        const data = JSON.stringify(surveysJSON);
        fs.writeFileSync(surveysPath, data);

        res.json('');
    });

    app.post('/giveAnswer', (req,res) => {
        const title = req.body.title;
        const questionId = req.body.questionId;
        const answer = req.body.answer;

        const surveysJSON = JSON.parse(fs.readFileSync(surveysPath));

        const surveyIndex = surveysJSON.map(survey => survey.title).indexOf(title);
        surveysJSON[surveyIndex].questions[questionId].result = answer;

        const data = JSON.stringify(surveysJSON);
        fs.writeFileSync(surveysPath, data);
        
        res.json(surveysJSON);
    });

    app.get('/getSurveys', (req,res) => {

        const surveysJSON = JSON.parse(fs.readFileSync(surveysPath));

        res.json(surveysJSON);
    });

    app.get('/getSurveys/:title', (req,res) => {
        const surveysJSON = JSON.parse(fs.readFileSync(surveysPath));
        if(surveysJSON.filter(survey => survey.title === req.params.title)){
            res.json(surveysJSON.filter(survey => survey.title === req.params.title));
            return;
        }
        res.json(surveysJSON);
    });
}

module.exports = devServer;