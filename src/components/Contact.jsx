import React from 'react';
import { Button, SendMessageIcon } from 'evergreen-ui';
import '../design/contact.css';
const contactDetails = [
    {
        id: 1,
        method: 'Facebook',
        value: 'varun@example.com',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfu0o-VMx9Wa01i3eoQ5fOEOL0BR6AzvYUItx0CrPUl6_XT7pjpN5iLbrAmRqHdhUG-4&usqp=CAU',
        link: 'mailto:varunkodamanchili@gmail.com'
    },
    {
        id: 3,
        method: 'Instagram',
        value: 'varun_',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9V4NGi4jiLPvEtqcMH5AkQRSsyJ77UaJjDQ&s',
        link: 'https://linkedin.com/in/varun'
    },
    {
        id: 2,
        method: 'X',
        value: 'varun',
        icon: 'https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10794.jpg',
        link: 'tel:+911234567890'
    },


];

const Contact = () => {
    return (
        <>
            <h2 className="contact-heading" id="Contact">FOLLOW ME</h2>
            <div className="contact-container">
                <div className="contact-list">
                    {contactDetails.map(item => (
                        <div className="contact-card" key={item.id} onClick={() => window.open(item.link, '_blank')}>
                            <div className="contact-icon-circle">
                                <img src={item.icon} alt={item.method} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="email-btn-cont">
                <Button onClick={() => window.location.href = "mailto:varunkodamanchili@gmail.com"} marginY={8} marginRight={12} iconBefore={SendMessageIcon} id="send-email-btn" className="email-btn">
                    Send an Email
                </Button>
            </div>
        </>
    );
};

export default Contact;
