import React from "react";
import { Link } from "react-router-dom";
class Memory extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="edu">
                    <div className=" main ">
                        <div className="cards">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/images/memory.jpeg" className="card-img-center" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"></p>
                                    <Link to="/GameBoard" className="btn btn-primary">Start the Game</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Memory;
