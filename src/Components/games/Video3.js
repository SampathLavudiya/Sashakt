import React from 'react';
import { Link } from "react-router-dom";
const Video3 = () => {
    return (
        <div className="edu">
            <div className='video1'>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/aJoGct2vJrI?si=BHWMYNsQmsaaoiQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <Link to="/QuizComponent3" className="btn btn-primary" style={{ display: 'block' }}>Let's start Quiz</Link>
            </div>
        </div>
    );
}

export default Video3;