import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import me from '../contact.JPG'

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

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Navbar></Navbar>
            <Box className={classes.root}>
            </Box>
        </div>
    )
}

export default Contact
