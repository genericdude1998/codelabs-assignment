import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Survey from './surveysList/survey/Survey';
import SurveyCreator from './surveyCreator/SurveyCreator';
import SurveysList from './surveysList/SurveysList';
import Home from './home/Home';
import Surveydisplayer from './takeSurvey/SurveyDisplayer';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Home/>
                } />
                <Route path='/newSurvey' element={
                    <SurveyCreator />
                } />
                <Route path='/surveysList' element={
                    <SurveysList />
                } />
                <Route path='/takeSurvey/:title' element={
                    <Surveydisplayer />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
