import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import SurveyCreator from './surveyCreator/SurveyCreator';
import SurveysList from './surveysList/SurveysList';
import Home from './home/Home';
import SurveyDisplayer from './takeSurvey/SurveyDisplayer';
import SurveyResults from './surveyResults/SurveyResults';

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
                    <SurveyDisplayer />
                } />
                <Route path='/surveyResults/:title' element={
                    <SurveyResults />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
