import React from "react";
import dashboard from '../assets/images/dashboard.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
                <div className="projects-grid">
                        <div className="project cinetica">
                                <div className="cinetica-single">
                                    <a href="https://cinetica-xi.vercel.app" target="_blank" rel="noreferrer">
                                        <img src={dashboard} className="zoom" alt="Cinetica dashboard" />
                                    </a>
                                </div>
                                <a href="https://cinetica-xi.vercel.app" target="_blank" rel="noreferrer"><h2>Cinetica — Intelligent Movie Discovery Platform</h2></a>
                                <p className="project-desc">Cinetica is a movie discovery and recommendation platform designed to enhance user experience through structured data processing and dynamic filtering. Built with a focus on scalable filtering mechanisms, efficient data querying, and responsive frontend design.</p>
                        </div>
                </div>
    </div>
    );
}

export default Project;