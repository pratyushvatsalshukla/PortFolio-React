import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="blob:https://teams.microsoft.com/6d4fdc4b-03db-4347-a202-131d71ed4803"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Pratyush</h2>
            <p className="subtitle">"An Athlete Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};
