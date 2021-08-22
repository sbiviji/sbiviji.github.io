import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import me from '../newContact.jpg'
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {useTheme} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
      backgroundImage:`url(${me})`,
      backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      
    },
    picture: {
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
    containerBig:{
        paddingTop: theme.spacing(10),
        fontFamily: "Open Sans, sans-serif",
    },
    containerSmall:{
        paddingTop: theme.spacing(3),
        fontFamily: "Open Sans, sans-serif",
    },
    containerTitle: {
        paddingBottom: theme.spacing(3),
        justifyContent: "center",
        fontSize: "2.4rem",
        fontWeight: 700, 
    },
    paragraph: {
        fontSize: "1.1rem",
        paddingBottom: theme.spacing(1),
    },
    cardShadow: {
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
}));

const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
        <div className={classes.background}>
        <Navbar></Navbar>
        {isMatch ? (
            <div className={classes.root}>
            <Container maxWidth="lg" className={classes.containerBig}>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Card className={classes.cardShadow}>
                            <CardContent>
                            <Typography varient="h1" className={classes.containerTitle}>
                                Book an Appointment 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                Email me at sbiviji@umich.edu, and mention "SBVG Photography" in the subject. Please include the following information so I can get an idea of what you're looking for:
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                1) Your name
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                2) Type of photoshoot (headshots, creative, graduation, senior pictures, etc)
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                3) Number of people 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                4) Preferred location  
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                5) Available dates 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                6) Other details about what you're looking for (logistics, ideas about outfits/locations/poses/props, etc)
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                I will reach out to you within 24 hours with information about pricing and packages offered based on your specifications. I look forward to working with you!
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </div>
        ):(
            <>
            <Box className={classes.picture}>
            </Box>
            <Container maxWidth="lg" className={classes.containerSmall}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Card className={classes.cardShadow}>
                            <CardContent>
                            <Typography varient="h1" className={classes.containerTitle}>
                                Book an Appointment 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                Email me at sbiviji@umich.edu, and mention "SBVG Photography" in the subject. Please include the following information so I can get an idea of what you're looking for:
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                1) Your name
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                2) Type of photoshoot (headshots, creative, graduation, senior pictures, etc)
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                3) Number of people 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                4) Preferred location  
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                5) Available dates 
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                6) Other details about what you're looking for (logistics, ideas about outfits/locations/poses/props, etc)
                            </Typography>
                            <Typography varient="h2" className={classes.paragraph}>
                                I will reach out to you within 24 hours with information about pricing and packages offered based on your specifications. I look forward to working with you!
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </>
        )}
        </div>
        </>
    )
}

export default Contact
