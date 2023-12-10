// HomePage.js
import React from 'react';
import { Container, Typography, Avatar, Grid } from '@mui/material';
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
import headshot from '../assets/headshot.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
                Hey there! I'm Kian 👋
            </Typography>
            <Grid sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
                <Grid item xs={4}>
                    <Avatar alt="Your Name" src={headshot} sx={{ width: 250, height: 250 }} />
                </Grid>
                <Grid item xs={8}>
                    {/* Display about me text with inline-styled technology icons */}
                    <Typography variant="body1" paragraph style={{ marginLeft: '16px' }}>
                        I am a Full Stack Developer with a focus on frontend development.
                        I have experience shipping production code in <FaReact style={{ color: '#61DAFB' }} /> React and <FaVuejs style={{ color: '#41B883' }} /> Vue for frontends,
                        and <FaNodeJs style={{ color: '#8CC84B' }} /> Node.js, <FaPython style={{ color: '#306998' }} /> Flask, and <FaJava style={{ color: '#007396' }} /> Spring (Java 8+) for backends.
                        I've worked with <FaGoogle style={{ color: '#4285F4' }} /> GCP and <FaAws style={{ color: '#FF9900' }} /> AWS for cloud solutions and <FaDatabase style={{ color: '#47A248' }} /> MongoDB and <FaFire style={{ color: '#FFA500' }} /> Firestore for NoSQL cloud storage.
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" style={{ marginTop: '16px' }}>
                I am currently looking for my next opportunity in the software industry! I am humbled that you're interested in learning a little bit about me. Once you're done exploring, feel free to sign my <Link style={{ color: '#ccc'}} to="/guestbook">Guestbook</Link> if you'd like :)
            </Typography>
            {/* Connect with me Section */}
            <ConnectWithMe />
            <Typography variant="body1">
                I hope you enjoy exploring this site and I look forward to hearing from you!
            </Typography>

        </Container>
    );
};

export default HomePage;
