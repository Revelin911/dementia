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
                                <a className="nav-link text-muted" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/tms">TMS</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link text-muted" href="/ketamine">Ketamine</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/psilocybin">Psilocybin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/contact">Contact Us</a>
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
                            <h5>Mental Health Services</h5>
                            <p className="text-muted">
                                The facts about how Psilocybin can affect your mental health
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-light border rounded">
                            <div className="mb-3">
                                <span className="fs-2">🍄</span>
                            </div>
                            <h5>Preparation for Psilocybin</h5>
                            <p className="text-muted">
                                Steps prior to meeting and follow-up
                            </p>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-light border rounded">
                                <div className="mb-3">
                                    <span className="fs-2">📚</span>
                                </div>
                                <h5>Lets Get Educated</h5>
                                <p className="text-muted">
                                    Lets get educated on the facts!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h6 className="text-muted">Zeniths Story About Mental Health</h6>
                            <h2>Subtitle to this section</h2>
                            <p>
                                Paragraph explaining story
                            </p>
                            <ul className="list-unstyled">
                                <li>🍄</li>
                                <li>🧠</li>
                                <li>🍄</li>
                                <li>🧠</li>
                            </ul>
                            <button className="btn btn-outline-dark mt-3">Lets Get Started</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                            src="imageplacement"
                            className="img-fluid rounded shadow-sm"
                            alt="image goes here"
                            />
                            <p className="small mt-2 text-muted">
                                <em>CEO: Silas - Provider</em>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer section*/}
                {/* <div
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">
                    <a className="navbar-brand text-dark fw-bold" href="#"> Look at our schedule! </a>
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
                            </nav>
                            </div> */}
            </div>
    );
};


export default Home;