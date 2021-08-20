import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import flowers from '../IMG_0609.JPG'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";



const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${flowers})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    }
}));

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <MuiThemeProvider>
            <Navbar></Navbar>
            <Header></Header>
            </MuiThemeProvider>
        </div>
    )
}

export default Home
