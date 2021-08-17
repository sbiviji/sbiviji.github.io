import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia
} from "@material-ui/core"
import sbvg from '../contact.JPG'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import avatar from '../sbvg_inverted.png';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
        height: "85%",
        width: "85%"
    },
    title: {
        color: "white",
        backgroundColor: "black",
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem",
        backgroundColor: "black"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1,
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "30px",
        marginLeft: "38px",
        color: "white",
        fontSize: "20px",
        outline: "white",
        backgroundColor: "transparent"
    },
}));

const Header = () => {
    const classes = useStyles()
    return (
        
        <Box className = {classes.typedContainer}>
            <Grid container justify="center">
                <img src={avatar} alt="Shazeen" className = {classes.avatar}></img>
            </Grid>
            <Typography variant="h3" className = {classes.title}>
            </Typography>
            <Typography variant="h5" className = {classes.subtitle}>
            </Typography>
            <Button variant="outlined" color="inherit" component={Link} to={"/portfolio"} className={classes.menuButton}>
                Explore my work
            </Button>
            <Button variant="outlined" color="inherit" component={Link} to={"/contact"} className={classes.menuButton}>
                Let's get in touch
            </Button>
        </Box>
       
    )
}

export default Header
