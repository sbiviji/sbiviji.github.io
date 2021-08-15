import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from './Navbar'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import avatar from '../avatar.jpg'
import coffee from '../coffee.JPG'
import { mergeClasses } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];
  
  <Gallery photos={photos} />;
const itemData = [
    {
    img: avatar,
    title: 'Image',
    author: 'author',
    cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: coffee,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: coffee,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: avatar,
        title: 'Image',
        author: 'author',
        cols: 2,
    }
];

const useStyles = makeStyles((theme) => ({
    imageList: {
      width: "100%",
      maxheight: "100%",
      objectFit: 'contain',
    },
    typedContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    }
}));

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar></Navbar>
            
            <Divider></Divider>
            <Box className = {classes.typedContainer}>
                <ImageList rowHeight={450} className={classes.imageList} cols={5} rowWidth={'auto'}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} className={classes.imageList}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    )
}

export default Resume
