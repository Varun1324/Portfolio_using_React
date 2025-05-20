import React, { useEffect, useState } from "react";
import "../design/skills.css"; // Plain CSS file
import { Button, Pane, Text, Heading, Paragraph } from 'evergreen-ui'

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("/data/skills.json");
                const data = await res.json();
                setSkillsData(data);
            } catch (error) {
                console.error("Failed to fetch skills:", error);
            }
        };
        fetchSkills();
    }, []);

    return (
        <>
            <div className="skills-container" id="Skills">
            <Pane padding={20} className="skill-title">
                <h1>SKILLS</h1>
            </Pane>

            <Pane>
            <div className="skills-grid">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-card-title">{group.title}</h3>
                            <div className="skill-list">
                                {group.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <img src={skill.image} alt={skill.name} />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Pane>

        </div>
        </>

    );
};

export default Skills;
