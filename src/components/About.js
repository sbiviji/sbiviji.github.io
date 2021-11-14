import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import me from '../AboutMe.JPG'
import meSmall from '../AboutMeTestt.JPG'
import { Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { CardContent } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {useTheme} from "@material-ui/core/styles"

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
    rootSmall: {
        backgroundImage:`url(${meSmall})`,
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
    },
    container:{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        fontFamily: "Open Sans, sans-serif",
    },
    containerTitle: {
        paddingBottom: theme.spacing(0),
        justifyContent: "center",
        fontSize: "2.4rem",
        fontWeight: 700, 
    },
    containerSubtitle: {
        paddingBottom: theme.spacing(2),
        justifyContent: "center",
        fontSize: "1.9rem",
        fontWeight: 500, 
    },
    paragraph: {
        fontSize: "1.1rem",
        paddingBottom: theme.spacing(1),
    },
    cardShadow: {
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
}));

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={classes.background}>
            <Navbar></Navbar>
                {isMatch ? (
                <div>
                <Box className={classes.root}>
                </Box>
                </div>
                ):(
                    <div>
                    <Box className={classes.rootSmall}>
                    </Box>
                    </div>
                )}
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Card className={classes.cardShadow}>
                                <CardContent>
                                <Typography varient="h1" className={classes.containerTitle}>
                                    Hi, I'm Shazeen!
                                </Typography>
                                <Typography varient="h2" className={classes.containerSubtitle}>
                                    Welcome to SBVG Photography
                                </Typography>
                                <Typography varient="h2" className={classes.paragraph}>
                                I’m a photographer based in Ann Arbor, MI. I received my undergraduate degree from the University of Michigan and now work full-time as a software engineer. 
                                </Typography>
                                <Typography varient="h2" className={classes.paragraph}>
                                My passion for photography remained a passing interest  until my sister gifted me a camera several months ago. Since then, I’ve thrown myself into the hobby and worked to explore everything in the territory - editing software, lighting tricks, manual settings, and more. I experimented with many different styles of photography and finally landed on portraiture. 
                                </Typography>
                                <Typography varient="h2" className={classes.paragraph}>
                                I’m especially interested in portrait photography because I enjoy capturing people’s personalities through their expressions and body language in a given moment. I put a lot of thought into the composition of every photograph to reflect the authenticity of my subject. Each photoshoot has its own novelty - I get to meet new people, play with lighting, and find inspiring spaces. 
                                </Typography>
                                <Typography varient="h2" className={classes.paragraph}>
                                Some fun facts about me are that I have a black belt in Tang Soo Do karate, my favorite city is Dubai, and I love catching a good sunrise. I’m currently learning how to rollerblade, and find that trying to slow down after building momentum is way harder than it looks. Additionally, I enjoy web and app development, having built this website myself using React. 
                                </Typography>
                                <Typography varient="h2" className={classes.paragraph}>
                                Don’t hesitate to reach out if you would like to schedule a photoshoot. I look forward to working with you! 
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
        </div>
    )
}

export default About
