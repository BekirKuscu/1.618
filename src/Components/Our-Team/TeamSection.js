import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Mehmet Omer Demir',
      image: '/images/Omer.jpg',
      linkedin: 'https://www.linkedin.com/in/mehmet-%C3%B6mer-demir-uk/',
      github: 'https://github.com/Mr-DEM1R',
    },
    {
      name: 'Bekir Kuscu',
      image: '/images/Bekir.jpg',
      linkedin: 'https://www.linkedin.com/in/bekir-kuscu-144773176/',
      github: 'https://github.com/BEKIRKSU',
    },
    {
      name: 'Onur Atas',
      image: '/images/Onur.jpg',
      linkedin: 'https://www.linkedin.com/in/onur-atas-bb9a29251/',
      github: 'https://github.com/onurat',
    },
  ];

  return (
    <div className="team-section">
      <h2>OUR TEAM</h2>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="team-member-info">
              <h3>
                {member.name}
              </h3>
              <div className="social-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
