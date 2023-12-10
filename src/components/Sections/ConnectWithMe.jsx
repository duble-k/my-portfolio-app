// ConnectWithMeSection.js
import React from 'react';
import { Container, Typography, Grid, Button, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resume from '../../assets/resume.pdf'; // Adjust the path accordingly

const ConnectWithMeSection = () => {
    return (
        <Container sx={{ marginTop: 4, marginBottom: 4 }}>
            <Grid container spacing={3}>
                {/* Text and Icons */}
                <Grid item xs={12} style={{ paddingLeft: '0px'}}>
                    <Typography variant="h6" paragraph>
                        Connect with me on the following platforms:
                    </Typography>
                    <Grid item>
                        {/* Social Media Icons */}
                        <Link href="https://github.com/duble-k" target="_blank" rel="noopener noreferrer" color="inherit">
                            <FaGithub style={{ fontSize: 30, marginRight: 20 }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/kian-karbasy-95173820a/" target="_blank" rel="noopener noreferrer" color="inherit">
                            <FaLinkedin style={{ fontSize: 30, marginRight: 20 }} />
                        </Link>
                        <Link href="mailto:kkarbasy@hotmail.com" color="inherit">
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
