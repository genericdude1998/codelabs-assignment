import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Survey from './surveysList/survey/Survey';
import SurveyCreator from './surveyCreator/SurveyCreator';
import SurveysList from './surveysList/SurveysList';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/newSurvey' element={
                    <SurveyCreator />
                }>
                </Route>
                <Route path='/surveysList' element={
                    <SurveysList />
                }>
                </Route>
                <Route path='/takeSurvey' element={
                    <Survey title={'title'}/>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
