const express = require('express');
const surveys = require('./surveys');
const devServer = (devServer) => {
    const app = devServer.app;

    app.use(express.json());

    app.post('/createSurvey', (req,res) => {
        const title = req.body.title;
        const questions = req.body.questions;

        var newSurveys = [...surveys, {title, questions}];

        res.json(newSurveys);
    })
}

module.exports = devServer;