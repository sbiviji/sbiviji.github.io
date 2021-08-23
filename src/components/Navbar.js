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
import {makeStyles} from '@material-ui/core/styles'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {NavLink} from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu"
import logo from '../sbvg_inverted.png'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {useTheme} from "@material-ui/core/styles"
import { useLocation } from 'react-router-dom';

// CSS STYLES 
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "black",
        height: "100%",
        Opacity: "50%",
        [theme.breakpoints.down('sm')]:{
            maxHeight: "auto"
        }
    },
    avatar: {
        display: "block", 
        margin: "0.5rem auto",
        width: "auto",
        height: theme.spacing(13)
    },
    listItem: {
        color: "white",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        "&.active": {
            background:'white',
            color: 'black'
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "right",
        marginLeft: "auto"
    },
    logoButton: {
        maxHeight: "50px",
        [theme.breakpoints.down('sm')]:{
            display: "none"
        }
    },
    menuIconSliderButton: {
        [theme.breakpoints.down('sm')]:{
            marginLeft: "auto"
        }
    },
    pageName: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "20px",
        textTransform: "uppercase"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
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
    },
    
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };

    //breakpoints
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    const location = useLocation();

    const sideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div" onclick={toggleSlider(slider,false)}>
            <img className = {classes.avatar} src={logo} alt="Shazeen"></img>
            <Divider></Divider>
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key = {key} component={NavLink} to={lsItem.listPath}>
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
                    {isMatch ? (
                        <>
                        {menuItems.map((lsItem, key)=>(
                            <Typography className = {classes.pageName}>{window.location.pathname == lsItem.listPath ? lsItem.listText : ""}</Typography>
                        ))}
                        <IconButton className = {classes.menuIconSliderButton} onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{color: 'white'}}></MenuIcon>
                        </IconButton>
                        <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                            {sideList("right")}
                        </MobilRightMenuSlider>
                        </>
                    ) : (
                    <>
                    <Button component={NavLink} to={"/"} exact={true}>
                    <img src={logo} className={classes.logoButton}></img>
                    </Button>
                    <Typography variant="h5" style={{color: 'white'}}>
                    </Typography>
                    <div className={classes.toolbar}>
                        {menuItems.map((lsItem, key)=>(
                        <Button color="inherit" key = {key} component={NavLink} to={lsItem.listPath} exact={true} className={classes.menuButton}>
                            {lsItem.listText}
                        </Button>
                        ))}
                    </div> 
                    </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
