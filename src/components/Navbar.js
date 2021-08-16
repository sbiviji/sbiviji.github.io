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
    ListItemIcon,
    Button
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Opacity
} from "@material-ui/icons"
import avatar from '../avatar.jpg'
import {makeStyles} from '@material-ui/core/styles'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu"

// CSS STYLES 
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "black",
        height: "100%",
        Opacity: "50%"
    },
    avatar: {
        display: "block", 
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "right",
        marginLeft: "auto"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/sbvg"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "About Me",
        listPath: "/about"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
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
            <AppBar position='fixed' style={{background: 'black', opacity: '0.75'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style={{color: 'white'}}></MenuIcon>
                    </IconButton>
                    <Typography variant="h5" style={{color: 'white'}}>
                        SBVG Photography
                    </Typography>
                    <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                    </MobilRightMenuSlider>
                    <div className={classes.toolbar}>
                        {menuItems.map((lsItem, key)=>(
                        <Button color="inherit" key = {key} component={Link} to={lsItem.listPath} className={classes.menuButton}>
                            {lsItem.listText}
                        </Button>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
