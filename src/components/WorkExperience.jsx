import React from 'react';
import { Typography, Paper, Button, Container } from '@mui/material';
import { FaCode, FaPython, FaReact, FaVuejs, FaNodeJs, FaAws, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlask } from "react-icons/si";

const WorkExperience = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="white">
        Work Experience
      </Typography>

      {/* Carfax US */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="body1">
          <FaCode style={{ color: '#61DAFB', marginRight: 1 }} />
          <span>
            Associate Software Engineer
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Carfax US | London, ON | Jan. - Sep. 2023
            </Typography>
          </span>
          <ul>
            <li>Led development of an internal React application, reducing task duration by 20%.</li>
            <li>Implemented role fetching micro-service, improving data migration efficiency by 10%.</li>
            <li>Wrote comprehensive unit tests using Spock and Jest for code quality and reliability.</li>
            <li>Utilized Postman for API testing of backend micro-services in Spring and Node.js frameworks.</li>
            <li>Migrated legacy application to AWS using the serverless framework.</li>
          </ul>
          Key Technologies:
          <ul>
            <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
            <li><FaNodeJs style={{ color: '#8CC84B' }} /> Node.js</li>
            <li><FaAws style={{ color: '#FF9900' }} /> AWS</li>
          </ul>
        </Typography>
      </Paper>

      {/* Neatco Engineering Services Inc */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="body1">
          <FaPython style={{ color: '#4B8BBE', marginRight: 1 }} />
          <span>
            Software Developer
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Neatco Engineering Services Inc | Waterloo, ON | Apr. - Sep. 2022
            </Typography>
          </span>
          <ul>
            <li>Developed a custom algorithm using Python's OpenCV and Detectron2 for accurate cartridge detection.</li>
            <li>Deployed the AI algorithm on an edge computing device, improving facility accuracy by 10%. Used Flask to handle endpoint calls from other systems.</li>
            <li>Designed and implemented a data pipeline in Python for AWS S3 cloud storage.</li>
            <li>Created React/Flask demo applications showcasing custom Detectron2 AI algorithms.</li>
          </ul>
          Key Technologies:
          <ul>
            <li><FaPython style={{ color: '#4B8BBE' }} /> Python</li>
            <li><SiFlask /> Flask</li>
            <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
            <li><FaAws style={{ color: '#FF9900' }} /> AWS</li>
          </ul>
        </Typography>
      </Paper>

      {/* Molex Canada */}
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="body1">
          <FaVuejs style={{ color: '#4CAF50', marginRight: 1 }} />
          <span>
            Frontend Software Developer
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Molex Canada | Waterloo, ON | Jan. 2021 - Apr. 2022
            </Typography>
          </span>
          <ul>
            <li>Led the creation of a highly reusable component library based in Vue.js, reducing future project timelines by 50%.</li>
            <li>Identified redundant UI components and proposed methods for dynamic reusability and rendering.</li>
            <li>Programmed a web application with meticulous attention to detail and Figma mock-ups.</li>
            <li>Designed and developed an internal web application, improving hardware configuration efficiency by 30%.</li>
          </ul>
          Key Technologies:
          <ul>
            <li><FaVuejs style={{ color: '#4CAF50' }} /> Vue.js</li>
            <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
            <li><FaAws style={{ color: '#FF9900' }} /> AWS</li>
          </ul>
        </Typography>
      </Paper>
      {/* Examples from Neatco Engineering Services Inc */}
      <Typography variant="h5" gutterBottom color="white">
        Examples From Neatco Engineering Services Inc
      </Typography>

      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="body1">
          While the applications I developed at Carfax US and Molex Canada were mainly internal applications that are not public (still had thousands of internal facing users),
          my contributions at Neatco Engineering Services Inc can be demonstrated through the following:
        </Typography>

        {/* YouTube links */}
        <div sx={{ display: 'flex', flexDirection: 'column', marginTop: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FaYoutube />}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: 5, marginBottom: 2 }}
          >
            The Recycling Facility That Uses Algorithms I Worked On!
          </Button>

          <Button
            variant="outlined"
            startIcon={<FaYoutube />}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginBottom: 2 }}
          >
            One of the MANY Applications I developed A Flask API for!
          </Button>
        </div>

        {/* Link to their website */}
        <Button
          variant="outlined"
          startIcon={<FaExternalLinkAlt />}
          href=""
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginTop: 2 }}
        >
          Neatco Engineering Services Inc Website
        </Button>
      </Paper>
    </Container>
  );
};

export default WorkExperience;
