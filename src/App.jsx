import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import PersonalProjects from "./components/PersonalProjects";
import GuestBook from "./components/GuestBook";
import WorkExperience from "./components/WorkExperience";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/projects"
            element={<PersonalProjects />}
          />
          <Route
            path="/work"
            element={<WorkExperience />}
          />
          <Route
            path="/guestbook"
            element={<GuestBook />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
