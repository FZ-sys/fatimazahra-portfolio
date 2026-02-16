import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Design of scalable backend services",
    "Python",
    "FastAPI",
    "REST APIs",
    "Data ingestion & pipelines",
    "Indexing",
    "SQL / PostgreSQL",
    "FFmpeg (media processing)",
    "Docker",
    "CI/CD",
];

const labelsSecond = [
    "Testing (Cypress)",
    "E2E & Component Testing",
    "Automation",
    "Performance",
    "Monitoring",
    "Linux",
    "Scripting",
    "Postman",
];

const labelsThird = [
    "LLM Integration",
    "LangChain",
    "Whisper (speech-to-text)",
    "Semantic Search & Embeddings",
    "Vector DBs",
    "Prompt Engineering",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend & Data Engineering</h3>
                    <p>Design and implementation of scalable backend services and AI-driven extraction pipelines, including ingestion from multimodal sources and robust indexing for search.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Testing, Automation & Ops</h3>
                    <p>Implementing robust testing strategies (E2E & component), automation of pipelines and deployments, and observability to guarantee reliability and performance at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Practices:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & LLM Integration</h3>
                    <p>Integrating LLMs for document understanding and semantic search, orchestrating pipelines with LangChain, and processing multimodal content (speech-to-text with Whisper, media handling).</p>
                    <div className="flex-chips">
                        <span className="chip-title">ML / LLM:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;