import React from "react";
import "../design/education.css";
const educationData = [
    {
        title: "B.Tech - CSE (AI)",
        institution: "Sri Vasavi Engineering College",
        cgpa: "CGPA: 8.99",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sri_Vasavi_College_Logo.jpg",
    },
    {
        title: "Intermediate - MPC",
        institution: "Aditya Junior College",
        cgpa: "Percentage: 94%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCdDDR2ObMInl4pgH0qnKb0TJfV43KtKA8w&s",
    },
    {
        title: "10th - SSC",
        institution: "GSR E.M High School",
        cgpa: "CGPA: 9.7",
        image: "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/db/16/ecdb1682-553e-27c4-8794-68a6c681e6d0/source/512x512bb.jpg",
    },
];

const Education = () => {
    return (
        <>
            <div id="Education">
                <h2 className="timeline-heading">EDUCATION</h2>
            </div>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-circle">
                                <img src={edu.image} alt={edu.title} />
                            </div>
                            <div className="timeline-content">
                                <h3>{edu.title}</h3>
                                <p>{edu.institution}</p>
                                <p>{edu.cgpa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Education;