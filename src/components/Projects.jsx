import React, { useState } from 'react';
import '../design/projects.css';
import weather from '../assets/weather.webp';
import netflix from '../assets/netflix.webp';
import webscrap from '../assets/webscrap.png';
import movie from '../assets/movie.png';
import { Button, GitBranchIcon, EyeOpenIcon, Pane } from 'evergreen-ui';

const projectsData = [
    {
        id: 1,
        title: "Weather Info WebApp",
        category: "Web",
        image: weather,
        technologies: "Python, HTML, CSS, JS",
        desc: "A modern, responsive online application that retrieves current meteorological information. Built with HTML, CSS, JS, and Flask-Python for seamless user experience.",
        view: "https://weather-forecast-orcin-six.vercel.app/",
        github: "https://github.com/Varun1324/Weather-info-webapp",
        deploy: "http://varun1324.pythonanywhere.com/"
    },
    {
        id: 2,
        title: "Movie Recommendation System",
        category: "ML",
        image: movie,
        technologies: "Python, Streamlit, ML",
        desc: "Personalized movie recommendation platform that suggests movies based on user preferences using ML algorithms.",
        view: "https://cinecue.streamlit.app/",
        github: "https://github.com/Varun1324/movie-recomendation-system"
    },
    {
        id: 3,
        title: "Price Grabber for Online Shopping",
        category: "Web",
        image: webscrap,
        technologies: "Python, Flask, Selenium",
        desc: "Helps users compare prices from various online platforms using web scraping and Flask.",
        github: "https://github.com/Varun1324/Price-Grabber-for-online-shopping"
    },
    {
        id: 4,
        title: "Netflix Clone",
        category: "Web",
        image: netflix,
        technologies: "ReactJS, NodeJS, Express, MySQL",
        desc: "User authentication-focused Netflix clone built with React and Node.",
        github: "https://github.com/Varun1324/netflix-clone"
    }
];

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => selectedCategory === 'ML' ? project.category === 'ML' : project.category === 'Web');

    return (
        <div className='main-container' id='Projects'>
            <Pane padding={20} className="project-title">
                <h1>PROJECTS</h1>
                <div className="filter-buttons">
                    <Button onClick={() => setSelectedCategory('All')} marginRight={12}>All</Button>
                    <Button onClick={() => setSelectedCategory('Web')} marginRight={12}>Web Apps</Button>
                    <Button onClick={() => setSelectedCategory('ML')} marginRight={12}>Machine Learning</Button>
                </div>
            </Pane>

            <div className='projects'>
                {filteredProjects.map(project => (
                    <a href={project.deploy || project.github} key={project.id} target="_blank" rel="noopener noreferrer" className='redirect'>
                        <div className="p1">
                            <h3>{project.title}</h3>
                            <img src={project.image} alt={project.title} width={250} height={150} />
                            <div className="prg">Technologies Used: {project.technologies}</div>
                            <div className="descp">{project.desc}</div>
                            <div className="git">
                                {project.view && (
                                    <a href={project.view} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <Button marginY={8} marginRight={12} iconBefore={EyeOpenIcon} intent='none'>
                                            View
                                        </Button>
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <Button marginY={8} marginRight={12} iconBefore={GitBranchIcon}>
                                            GitHub
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;
