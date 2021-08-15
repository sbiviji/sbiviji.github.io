import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from '../avatar.jpg'
import {makeStyles} from '@material-ui/core/styles'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className = {classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} alt="Shazeen" className = {classes.avatar}></Avatar>
            </Grid>
            <Typography variant="h4" className = {classes.title}>
                SBVG
            </Typography>
            <Typography variant="h5" className = {classes.subtitle}>
                Photography
            </Typography>
        </Box>
    )
}

export default Header
