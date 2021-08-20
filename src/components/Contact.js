import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import me from '../contact.JPG'
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

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
        paddingTop: theme.spacing(3) 
    },
    containerTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "500",
        paddingBottom: theme.spacing(3),
        justifyContent: "center",
        fontSize: "2.4rem",
        fontFamily: "Open Sans, sans-serif",
    },
    card: {
        
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Navbar></Navbar>
            <Box className={classes.root}>
            </Box>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card>
                            <CardContent className={classes.card}>
                            <Typography varient="h1" className={classes.containerTitle}>
                                Pricing
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardContent>
                            <Typography varient="h1" className={classes.containerTitle}>
                                Contact Information
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact
