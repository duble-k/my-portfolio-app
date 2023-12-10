// PersonalProjects.js
import React from 'react';
import { Container, Typography, Grid, Paper, Link as MuiLink } from '@mui/material';
import todo from '../assets/todo.png';
import lab from '../assets/lab.png';
import {
    FaReact,
    FaNodeJs,
    FaGoogle,
    FaAws,
    FaDatabase,
    FaFire
}
    from 'react-icons/fa'; // Import icons from react-icons

const PersonalProjects = () => {
    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
                Personal Projects
            </Typography>

            {/* First Project */}
            <Grid container spacing={3}>
                {/* Project Image */}
                <Grid item xs={12} md={4}>
                    <img src={todo} alt="Project 1" style={{ width: '100%', height: 'auto' }} />
                </Grid>

                {/* Project Title and Description */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ padding: 2 }}>
                        <MuiLink href="" target="_blank" rel="noopener noreferrer">
                            <Typography variant="h5" gutterBottom>
                                Firebase Todo Managing Application
                            </Typography>
                        </MuiLink>
                        <Typography variant="body1">
                            <ul>
                                <li>
                                    A <FaReact style={{ color: '#61DAFB' }} /> React web application designed, developed, and tested.
                                </li>
                                <li>
                                    The application utilizes Google Cloud Platform (GCP), specifically Firestore and Authentication functions provided by the Firebase Modular SDK.
                                </li>
                                <li>
                                    This app allows users to seamlessly sign up, log in, and schedule todos. User data is securely stored and retrieved using Firestore as the database, with Authentication functions ensuring a secure user experience.
                                </li>
                                <li>
                                    Additionally, the app provides valuable insights into user productivity by displaying metrics for the current week and month. These metrics offer users a clear view of their progress and help them stay organized.
                                </li>
                            </ul>
                            <br />
                            Key Technologies:
                            <ul>
                                <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
                                <li><FaGoogle style={{ color: '#4285F4' }} /> Google Cloud Platform (GCP)</li>
                                <li><FaFire style={{ color: '#FFA500' }} /> Firestore</li>
                            </ul>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Second Project */}
            <Grid container spacing={3} sx={{ marginTop: 4 }}>
                {/* Project Image */}
                <Grid item xs={12} md={4}>
                    <img src={lab} alt="Project 2" style={{ width: '100%', height: 'auto' }} />
                </Grid>

                {/* Project Title and Description */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ padding: 2 }}>
                        <MuiLink href="" target="_blank" rel="noopener noreferrer">
                            <Typography variant="h5" gutterBottom>
                                Lab Data Application
                            </Typography>
                        </MuiLink>
                        <Typography variant="body1">
                            <ul>
                                <li>
                                    A <FaReact style={{ color: '#61DAFB' }} /> React web application that serves as a lab data management tool.
                                </li>
                                <li>
                                    Developed for a local hospital's lab department to manage information from inquiring phone calls across different departments.
                                </li>
                                <li>
                                    Built using Node.js as the server, AWS S3 and MongoDB as the cloud storage solutions, and hosted on Render.com.
                                </li>
                                <li>
                                    Access the site with demo credentials: basicDemo (username) and 1amb4sic (password). Please allow a moment for login as it is hosted on Render's free tier server.
                                </li>
                                <li>
                                    Note: The data in the application is currently test data and may not include all production features, such as PDF forms.
                                </li>
                            </ul>
                            <br />
                            Key Technologies:
                            <ul>
                                <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
                                <li><FaNodeJs style={{ color: '#8CC84B' }} /> Node.js</li>
                                <li><FaAws style={{ color: '#FF9900' }} /> AWS S3</li>
                                <li><FaDatabase style={{ color: '#4CAF50' }} /> MongoDB</li>
                            </ul>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PersonalProjects;
