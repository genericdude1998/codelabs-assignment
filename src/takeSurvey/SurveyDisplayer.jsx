import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Surveydisplayer = () => {
    const {title} = useParams();
    
    const [survey, setSurvey] = React.useState();

    React.useEffect(() => {
        axios.get(`/getSurveys/${title}`).then(res => setSurvey(res.data[0]));
        return () => {
            
        };
    }, []);

    return (
        <div>
            {survey ? survey.title:'Loading'}
        </div>
    );
}

export default Surveydisplayer;
