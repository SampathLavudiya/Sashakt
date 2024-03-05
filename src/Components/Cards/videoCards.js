import React from "react";
import { Link } from "react-router-dom";

class VideoCards extends React.Component {
    state = {};

    render() {
        const videoData = [
            { id: 1, imageUrl: "/images/education.jpeg", link: "/Video1", title: "Video-1" },
            { id: 2, imageUrl: "/images/touch.jpg", link: "/Video2", title: "Video-2" },
            { id: 3, imageUrl: "/images/rights.jpeg", link: "/Video3", title: "Video-3" },
            // Add more video data as needed
        ];

        return (
            <>
                <div className="main">
                    <div className="cards">
                        {videoData.map((video) => (
                            <div className="card" style={{ width: '18rem' }} key={video.id}>
                                <img src={video.imageUrl} className="card-img-top" alt={`Video ${video.id}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{video.title}</h5>
                                    <p className="card-text"></p>
                                    <Link to={video.link} className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default VideoCards;
