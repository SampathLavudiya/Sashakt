import React from "react";
import { Link } from "react-router-dom";
class WordGames extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
               <div className="edu">
                <div className=" main "> 
                    <div className="cards">
                        <div className="card" style={{width: '18rem'}}>
                            <img src="images/Jumbled-sentences.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Jumbled-Sentence</h5>
                            <p className="card-text"></p>
                            <Link to="/JumbledSentenceGame" className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="images/wordgame.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">WordSearch-Game</h5>
                            <p className="card-text"></p>
                            <Link to="/WordSearchGame" className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="images/Jumble word.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Jumble-Word</h5>
                            <p className="card-text"></p>
                            <Link to ="/WordJumble " className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
                </div>
            </>
        );
    }
}
 
export default WordGames;
