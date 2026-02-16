import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2024 – August 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apprenticeship — Software Engineer, Dassault Systèmes</h3>
            <h4 className="vertical-timeline-element-subtitle">France</h4>
            <ul>
              <li>Writing technical specifications from functional documents</li>
              <li>Developing backend features in Python (FastAPI, REST APIs)</li>
              <li>End-to-end and component testing with Cypress</li>
              <li>Building multi-format extraction pipelines (PDF, PPT, TXT, audio, video, URL) and integrating LLMs (LangChain, Whisper)</li>
              <li>Automating indexing and improving search relevance</li>
              <li>Audio/video processing: conversion and optimization with FFmpeg</li>
              <li>Project communication: presentations, key metrics, and showcasing progress</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2023 – September 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apprenticeship — Business Process Analyst, Dassault Systèmes</h3>
            <h4 className="vertical-timeline-element-subtitle">France</h4>
            <ul>
              <li>Analyzing and formalizing business requirements</li>
              <li>Writing functional specifications and scoping documents</li>
              <li>UML modeling of processes and features</li>
              <li>Collaborating with developers, UX designers, and business stakeholders in English</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;