// HomePage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import {
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaPython,
    FaJava,
    FaGoogle,
    FaAws,
    FaDatabase,
    FaFire
}
    from 'react-icons/fa'; // Import icons from react-icons
import ConnectWithMe from './Sections/ConnectWithMe';

const HomePage = () => {
    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
                Hey there! I'm Kian 👋
            </Typography>

            {/* Display about me text with inline-styled technology icons */}
            <Typography variant="body1" paragraph>
                I am a Full Stack Developer with a focus on frontend development.
                I have experience shipping production code in <FaReact style={{ color: '#61DAFB' }} /> React and <FaVuejs style={{ color: '#41B883' }} /> Vue for frontends,
                and <FaNodeJs style={{ color: '#8CC84B' }} /> Node.js, <FaPython style={{ color: '#306998' }} /> Flask, and <FaJava style={{ color: '#007396' }} /> Spring (Java 8+) for backends.
                I've worked with <FaGoogle style={{ color: '#4285F4' }} /> GCP and <FaAws style={{ color: '#FF9900' }} /> AWS for cloud solutions and <FaDatabase style={{ color: '#47A248' }} /> MongoDB and <FaFire style={{ color: '#FFA500' }} /> Firestore for NoSQL cloud storage.
            </Typography>

            <Typography variant="body1">
                I am currently looking for my next opportunity in the software industry! I am humbled that you're interested in learning a little bit about me.
            </Typography>
            {/* Connect with me Section */}
            <ConnectWithMe />
            <Typography variant="body1">
                I hope you enjoy exploring this site and I am looking forward to hear from you!
            </Typography>

        </Container>
    );
};

export default HomePage;
