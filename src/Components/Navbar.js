import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
                <div class="container">
                    <nav 
                    class="navbar navbar-expand-sm bg-secondary fixed-top"
                    data-bs-theme="black"
                    >
                    <div class="container-fluid">
                        <a href="#" class="navbar-brand">Sashakt</a>
                        <button
                        class="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAlt"
                        >
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAlt">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link">Home</Link>
                            <Link to="/Aboutus" class="nav-link">About-Us</Link>
                            <Link to="/Feedback" class="nav-link">Feedback</Link>
                            <Link to="/ContactUs" class="nav-link">Contact-Us</Link>
                            {/* <Link to="/progress" class="nav-link">Progress</Link> */}

                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </>
        );
    }
}
export default Navbar;