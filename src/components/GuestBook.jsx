import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Grid } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { ExitToApp, AssignmentInd } from '@mui/icons-material'; // Import icons
import { signInWithPopup, GithubAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { auth, firestore } from '../firebase'; // Adjust the path accordingly
import { signOut } from 'firebase/auth';

const GuestBook = () => {
    const [result, setResult] = useState(null);
    const [signMessage, setSignMessage] = useState('');

    const [allSignMessages, setAllSignMessages] = useState([]);

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(
                query(collection(firestore, 'signatures'), orderBy('timestamp', 'desc'))
            );
            console.log(querySnapshot.size);
            const sigs = [];
            querySnapshot.forEach((doc) => {
                const signature = doc.data();
                if (signature) {
                    sigs.push(signature);
                }
            });
            setAllSignMessages(sigs);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run the effect once on mount

    const handleSignIn = async () => {
        try {
            const provider = new GithubAuthProvider();
            const signInResult = await signInWithPopup(auth, provider);
            setResult(signInResult);
        } catch (error) {
            console.error('Error signing in with GitHub:', error.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setResult(null);
            console.log('User signed out successfully.');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    const handleAddSignMessage = async () => {
        try {
            // Check if the user is signed in
            console.log(result.user);
            if (result.user) {
                console.log(result.user);
                // Get GitHub username if display name is null
                let userDisplayName = result.user.displayName;
                if (!userDisplayName) {
                    const additionalUserInfo = getAdditionalUserInfo(result);
                    console.log(additionalUserInfo);
                    if (additionalUserInfo && additionalUserInfo.profile) {
                        userDisplayName = additionalUserInfo.profile.login;
                    }
                }
                // Add comment to Firestore
                await addSignMessageToFirestore(signMessage, userDisplayName);

                // Clear the comment input after adding
                setSignMessage('');
            } else {
                console.error('User not signed in.');
            }
        } catch (error) {
            console.error('Error adding signature:', error.message);
        }
    };

    const addSignMessageToFirestore = async (signMessage, userDisplayName) => {
        const signatureRef = collection(firestore, 'signatures');
        // Add comment to Firestore
        await addDoc(signatureRef, {
            displayName: userDisplayName,
            text: signMessage,
            timestamp: new Date(),
        });
        fetchData();
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom color="white">
                Sign My Guestbook
            </Typography>
            {result ? (
                <>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Sign with a Message"
                                value={signMessage}
                                onChange={(e) => setSignMessage(e.target.value)}
                                variant="outlined"
                            />                        </Grid>
                        <Grid item xs={6}>
                            <Button disabled={signMessage.length < 1} variant="outlined" onClick={handleAddSignMessage} startIcon={<AssignmentInd />}>
                                Sign
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ paddingTop: 1 }}>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={handleSignOut} startIcon={<ExitToApp />}>
                                Sign Out
                            </Button>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Button
                        variant="outlined"
                        startIcon={<FaGithub />}
                        onClick={handleSignIn}
                    >
                        Sign In with GitHub
                    </Button>
                </>
            )}
            <div style={{ paddingTop: 15 }}>
                {allSignMessages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px', // Adjust the margin as needed
                        }}
                    >
                        <span
                            style={{
                                color: "inherit", // Use the primary color from MUI theme
                                marginRight: '8px', // Add spacing between display name and text
                            }}
                        >
                            {message.displayName}:
                        </span>
                        <span style={{ color: 'white' }}>{message.text}</span>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default GuestBook;
