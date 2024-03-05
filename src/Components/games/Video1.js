import React from 'react';
import { Link } from "react-router-dom";
const Video1 = () => {
    return (
        <div className="edu">
            <div className='video1'>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/i2m7dY47EB8?si=wK-J5Lslz540rdhN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Link to="/QuizComponent1" className="btn btn-primary" style={{display:"block"}}>Let's start Quiz</Link>
            </div>
        </div>
    );
}

export default Video1;