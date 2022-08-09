import React, {memo, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

import './ProjectPage.css';
import chevron from '../../common/icons/chevron.svg'
import home from '../../common/icons/home.svg'
import { PROJECTS, ID_TO_IMG } from '../../common/constants/blurb.js';
import {scrollToTop} from '../../common/helpers/dom.helpers.js';

const ProjectPage = () => {
    const { pathname } = useLocation();
    const projectData = PROJECTS[pathname];
    const { title, subtitle, prices: { project, contract}, scope, role, images } = projectData;

    useEffect(() => {
        scrollToTop();
    });

    const onImageClick = (e) => {
        if (e) {
            e.preventDefault();
        }

        const imgId = e.target.id;
        window.open(ID_TO_IMG[imgId], "_blank");
    }

    return (
        <div className="project-page__wrapper">
            <Link to="/">
                <div className="project-page__return">
                    <img className="project-page__chevron" src={chevron} alt="Back"/>
                    <img className="project-page__home" src={home} alt="Home"/>
                </div>
            </Link>
            <header className="project-page__header">
                <h1 className="project-page__title">
                    {title}
                </h1>
                <h2 className="project-page__subtitle">
                    {subtitle}
                </h2>
            </header>
            <div className="project-page__body">
                <div className="project-page__images">
                    <div className="project-page__grid">
                        {images.map((img, index) => {
                            return (
                                <div className="project-page-tile" key={index}>
                                    <div className="project-page__image-wrapper" onClick={onImageClick}>
                                        <img
                                            className="project-page__image"
                                            id={img.id}
                                            src={img.src}
                                            alt="Project"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="project-page__costs">
                    <div className="project-page__cost-card">
                        <h2 className="project-page__cost-text">Project Value</h2>
                        <p className="project-page__cost-number">{project}</p>
                    </div>
                    <div className="project-page__cost-card">
                        <h2 className="project-page__cost-text">Contract Value</h2>
                        <p className="project-page__cost-number">{contract}</p>
                    </div>
                </div>
                <div className="project-page__copy-wrapper">
                    <div className="project-page__copy">
                        <h2 className="project-page__copy-header">Project Scope</h2>
                        <div className="project-page__copy-body">{scope}</div>
                    </div>
                    <div className="project-page__copy">
                        <h2 className="project-page__copy-header">My Role</h2>
                        <div className="project-page__copy-body">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProjectPage);
