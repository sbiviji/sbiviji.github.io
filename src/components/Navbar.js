import React, {useState} from 'react'
import {
    AppBar,
    Toolbar, 
    ListItem, 
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography, 
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from '../avatar.jpg'
import {makeStyles} from '@material-ui/core/styles'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from 'react-router-dom'

// CSS STYLES 
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block", 
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Gallery"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };

    const classes = useStyles();

    const sideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div" onclick={toggleSlider(slider,false)}>
            <Avatar className = {classes.avatar} src={avatar} alt="Shazeen"></Avatar>
            <Divider></Divider>
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key = {key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className = {classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText primary={lsItem.listText} className = {classes.listItem}></ListItemText>
                </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component='nav'>
            <AppBar position='fixed' style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: 'tomato'}}></ArrowBack>
                    </IconButton>
                    <Typography variant="h5" style={{color: 'tan'}}>
                        SBVG Photography
                    </Typography>
                    <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar