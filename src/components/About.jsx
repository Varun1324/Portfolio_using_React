import React from 'react'
import { Button, Pane, Text, Heading, Paragraph } from 'evergreen-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PhoneIcon, DocumentOpenIcon, DownloadIcon,EditIcon,DocumentIcon} from 'evergreen-ui'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './../design/about.css'
// import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
    Popover,
    Position,
    Menu
} from 'evergreen-ui';
const About = () => {
    return (
        <>
            <div id="About">
                <Pane display="flex" alignItems="center" border="1px" padding="25px" elevation={0} borderRadius="10px" backgroundColor="blackAlpha.50" className="custom-pane">
                    <Pane>
                        <img src="https://res.cloudinary.com/durc5ydxo/image/upload/v1734781526/varun_pfrnz3.jpg" alt="profile" width={250} height={250} className="inner-pane" />
                    </Pane>
                    <Pane display="flex" flexDirection="column" marginLeft="50px">
                        <Heading size={700} marginTop={10} color="white" id="text">
                            Hi, I am
                        </Heading>
                        <Heading size={900} marginTop={10} color="white" id="text">
                            Varun Kodamanchili
                        </Heading>
                        <Text marginTop="5px" size={100} fontWeight="bold" color="white">Aspiring Full stack developer</Text>
                        <Paragraph marginTop={16} color="white" id="para">
                            "I aspire to work in a dynamic and challenging environment that fosters continuous learning and professional growth. I am driven to contribute meaningfully by utilizing my technical skills, creative thinking, and problem-solving abilities. My goal is to be part of innovative projects where I can enhance my knowledge, collaborate with forward-thinking professionals, and deliver impactful solutions that align with the organization's vision and goals."

                        </Paragraph>
                        <Pane display="flex" width="50" alignItems="center" marginTop={25} gap="15px">
                            <a href="https://github.com/Varun1324" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSquareGithub} size="2x" color='white' />
                            </a>
                            <a href="https://www.linkedin.com/in/varun-kodamanchili-01881b23b/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" color='white' />
                            </a>
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item
                                                icon={DocumentOpenIcon}>
                                                View
                                            </Menu.Item>
                                            <Menu.Item icon={DownloadIcon}>Download</Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <Button marginY={8} marginRight={12} iconBefore={DocumentIcon} id="resume-btn">
                                    Resume
                                </Button>
                            </Popover>
                        </Pane>
                        <Pane marginTop={20} display="flex" gap="10px">
                            <MdEmail color='white' size={20} />
                            <Text color='white' id="text">varunkodamanchili@gmail.com</Text>
                        </Pane>
                        <Pane marginTop={10} display="flex" gap="10px">
                            <FaPhoneAlt color='white' size={20} />
                            <Text color='white' id="text">+91 9392671324</Text>
                        </Pane>
                    </Pane>
                </Pane>
            </div>
        </>
    )
}

export default About