import React from "react";
import { Link } from "react-router-dom";

class McqCards extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="edu">
                    <div className=" main ">
                        <div className="cards">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/images/education.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">Importance of Education</p>
                                    <Link to="/Video1" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/images/touch.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">Good touch-Bad touch</p>
                                    <Link to="/Video2" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/images/rights.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">Child-Rights</p>
                                    <Link to="/Video3" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                            {/* <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 4</h5>
                            <p className="card-text">lorem</p>
                            <Link to ="/Video1" className="btn btn-primary">Let's start</Link>
                            </div>
                        </div> */}
                            {/* <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 5</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="./images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 6</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default McqCards;