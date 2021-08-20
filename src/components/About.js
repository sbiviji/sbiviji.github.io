import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import me from '../AboutMe.JPG'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundImage:`url(${me})`,
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    background: {
        backgroundColor: 'white',
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Navbar></Navbar>
            <Box className={classes.root}>
            </Box>
            <Grid item xs={6}>
                <Typography></Typography>
            </Grid>
        </div>
    )
}

export default About
