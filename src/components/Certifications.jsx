import React from 'react';
import '../design/certifications.css';

const certifications = [
  {
    id: 1,
    name: 'Web Developer Bootcamp 2023',
    company: 'Udemy',
    time: 'Jul 2022 - Dec 2022',
    link : 'https://www.udemy.com/certificate/UC-7961f626-0162-43ad-8290-fe00c0f4ca46/',
    image: 'src/assets/certifications/web.jpg', // Replace with actual image URL or import
  },
  {
    id: 2,
    name: 'Java Full Stack',
    company: 'Wipro',
    time: 'May 2024 - Sep- 2024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVuDLks-5zA7ReYoaSl-zyyOmntaRVRIh9g&s',
  },
  {
    id: 3,
    name: 'Python for Data Science',
    company: 'NPTEL',
    time: 'Feb 2023 - Apr 2023',
    link : 'https://drive.google.com/file/d/11Q5O7TUyqXCLVwprCi7QvYZCIjucW9m7/view',
    image: 'src/assets/certifications/python.jpg',
  },
  {
    id: 4,
    name: 'AWS Cloud Foundations',
    company: 'AWS',
    time: 'Nov 2022 - Dec 2022',
    link : 'https://drive.google.com/file/d/1eUyOT7dm-w-JLu2piAuukCk9-XZ13ly2/view',
    image: 'src/assets/certifications/aws.jpg',
  },
  {
    id: 5,
    name: 'Git Command Line for Beginners',
    company: 'Udemy',
    time: 'Feb 2022 - Apr 2022',
    link: 'https://www.udemy.com/certificate/UC-57988ff9-2b50-4339-845a-6ca2c5120f3c/',
    image : 'src/assets/certifications/git.jpg',
  },
];

const Certifications = () => {
  return (
    <>
    <h2 className="certifications-heading" id="Certifications">CERTIFICATIONS</h2>
    <div className="certifications-container" >
      <div className="certifications-list">
        {certifications.map(cert => (
          <div className="cert-card" key={cert.id} onClick={()=>{window.open(cert.link, "_blank")}}>
            <img src={cert.image} alt={cert.name} className="cert-image" />
            <div className="cert-details">
              <h4>{cert.name}</h4>
              <p>{cert.company}</p>
              <p>{cert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Certifications;
