import React from "react";
import { Link } from "react-router-dom";
class EduCards extends React.Component {
    state = {}
    render() {        
        return (
            <>           
                <div className=" main ">
                    <div className="cards">
                        <div className="card" style={{ width: '17rem',height:'22rem'}}>
                            <img src="/images/edu.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right to Education</h5>
                                <p className="card-text"></p>
                                <Link to="/RTEducation" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                        <div className="card" style={{ width: '17rem' ,height:'22rem'}}>
                            <img src="/images/RTdev.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right to Development</h5>
                                <p className="card-text"></p>
                                <Link to="/RTDevelopment" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                        <div className="card" style={{ width: '17rem',height:'22rem' }}>
                            <img src="/images/RTpro.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right to Protection</h5>
                                <p className="card-text"></p>
                                <Link to="/RTProtection" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                        <div className="card" style={{ width: '17rem',height:'22rem' }}>
                            <img src="/images/RTdis.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right against Discrimination</h5>
                                <p className="card-text"></p>
                                <Link to="/RTDiscrimination" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                        <div className="card" style={{ width: '17rem' ,height:'22rem'}}>
                            <img src="/images/RTsur.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right to Survival</h5>
                                <p className="card-text"></p>
                                <Link to="/RTSurvival" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                        <div className="card" style={{ width: '17rem',height:'22rem' }}>
                            <img src="/images/RTpar.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Right to Participation</h5>
                                <p className="card-text"></p>
                                <Link to="/RTParticipation" className="btn btn-primary">Learn It</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}

export default EduCards;