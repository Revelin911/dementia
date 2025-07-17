// Directs to homepage
// import { useState } from 'react';

function Home() {
    return (
        <div> 
            {/* NavBar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">
                    <a className="navbar-brand text-dark fw-bold" href="#"> Zenith Mental Health </a>
                    <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">TMS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">Psilocybin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-secondary text-white py-5 text-center">
                <h2>THIS IS ZENITH MENTAL HEALTH</h2>
                <h1 className="fw-bold">
                    Impacting Cognitive Function and Improving Lives
                </h1>
            </div>

            {/* Services Section */}
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="p-4 bg-light border rounded">
                            <div className="mb-3">
                                <span className="fs-2">🧠</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;