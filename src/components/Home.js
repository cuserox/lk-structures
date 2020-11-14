import React, { PureComponent, Fragment } from 'react';
import { Link } from "react-router-dom";

import './Home.css';
import profileLK from '../common/images/profile-lk.jpeg';
import { HEADER, BODY } from '../common/constants/blurb.js';

class Home extends PureComponent {
    render() {
    const { title, description } = HEADER;
    const { subtitle, projects } = BODY;
    return (
        <Fragment>
            <header className="home__header">
                <h1 className="home__title">
                    {title}
                </h1>
                <div className="header__wrapper">
                <div className="header__image-wrapper">
                    <img
                    className="home__header-image"
                    src={profileLK}
                    alt="LK Profile"
                    />
                </div>
                <div className="home__description">
                    {description}
                </div>
                </div>
            </header>
            <div className="home-body__wrapper">
                <h2 className="home-body__title">
                    {subtitle}
                </h2>
                <div className="home-body__grid">
                    {projects.map((project, index) => {
                        return (
                            <Link
                                to={project.link}
                                key={`${index}`}
                            >
                                <div className="home-tile">
                                    <div className="home-tile__image-wrapper">
                                        <img
                                            className="home-tile__image"
                                            src={project.image}
                                            alt="Project"
                                        />
                                    </div>
                                    <div className="home-tile__copy">
                                        {project.name}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
    }
};

export default Home;
