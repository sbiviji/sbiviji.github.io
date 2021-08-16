import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import train from '../images/train.jpeg'


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${train})`,
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
            <Navbar></Navbar>
            <Header></Header>
        </div>
    )
}

export default Home
