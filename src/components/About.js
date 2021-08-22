import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import me from '../AboutMe.JPG'
import { Typography } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { CardContent } from '@material-ui/core';


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
    },
    container:{
        paddingTop: theme.spacing(3),
        flexGrow: 1
    },
    containerTitle: {
        
        paddingBottom: theme.spacing(3),
        justifyContent: "center",
        fontSize: "2.3rem",
        
    },
    cardContent: {
        backgroundColor: "white",
        color: "black",
        textTransform: "uppercase",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
    },
    card: {
        alignSelf: 'center'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Navbar></Navbar>
            <Box className={classes.root}>
            </Box>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent className={classes.cardContent}>
                            <Typography varient="h1" className={classes.containerTitle}>
                                Hi, I'm Shazeen!
                            </Typography>
                            <Typography varient="h2">
                                Welcome to SBVG Photography
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
