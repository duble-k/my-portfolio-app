// ConnectWithMeSection.js
import React from 'react';
import { Container, Typography, Grid, Button, Link, Avatar } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import headshot from '../../assets/headshot.jpeg';
import resume from '../../assets/Kian_Karbasy_Resume.pdf'; // Adjust the path accordingly

const ConnectWithMeSection = () => {
    return (
        <Container sx={{ marginTop: 4, marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
                Connect With Me
            </Typography>

            <Grid container spacing={3}>
                {/* Circular Image Pane */}
                <Grid item xs={6}>
                    <Avatar alt="Your Name" src={headshot} sx={{ width: 250, height: 250 }} />
                </Grid>

                {/* Text and Icons */}
                <Grid item xs={6}>
                    <Typography variant="body1" paragraph>
                        Connect with me on the following platforms:
                    </Typography>
                    <Grid item>
                        {/* Social Media Icons */}
                        <Link href="" target="_blank" rel="noopener noreferrer" color="inherit">
                            <FaGithub style={{ fontSize: 30, marginRight: 20 }} />
                        </Link>

                        <Link href="" target="_blank" rel="noopener noreferrer" color="inherit">
                            <FaLinkedin style={{ fontSize: 30, marginRight: 20 }} />
                        </Link>

                        <Link href="mailto:" color="inherit">
                            <FaEnvelope style={{ fontSize: 30 }} />
                        </Link>

                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            href={resume}
                            target="_blank"
                            download="Kian_Resume.pdf"
                            sx={{ marginTop: 2 }}
                        >
                            Download Resume
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ConnectWithMeSection;
