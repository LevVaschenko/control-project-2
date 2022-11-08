import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './Main.scss'
import './City-life.scss'
import './Lifestyle.scss'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }} className="city-life-box">
                    <div className="city-life-box-outer">
                        <div className="city-life-box-inner">
                            <div className="city-life-box-content">
                                <h5 className="city-life">
                                    <span className="city-life-title">
                                        CITY LIFE
                                    </span>
                                </h5>
                                <div className="city-life-posts">
                                    <div className="city-life-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <Grid item xs={6} md={6}>
                                                    <div className="image">
                                                        <h2>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Lifestyle
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="entry-title-image">
                                                                How to Be a
                                                                Second Shooter
                                                                at Weddings and
                                                                Why It’s
                                                                Important
                                                            </h1>
                                                        </h2>
                                                        <img
                                                            src="images/city-life-image-1.jpeg"
                                                            className="image1"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={6}>
                                                    <div className="image">
                                                        <h2>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Style
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="entry-title-image">
                                                                How to
                                                                Photograph Food
                                                                Coloring or Dye
                                                                Dropped in Water
                                                            </h1>
                                                        </h2>
                                                        <img
                                                            src="images/city-life-image-2.jpeg"
                                                            className="image2"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Travel
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                How to Add a
                                                                Texture to Your
                                                                Photos – a
                                                                Tutorial on
                                                                Adding Textures
                                                            </h4>
                                                        </h3>
                                                        <img
                                                            src="images/city-life-image-3.jpeg"
                                                            className="image3"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Lifestyle
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                9 Ways to Use
                                                                Reflections More
                                                                Creatively for
                                                                Stunning
                                                                Photography
                                                            </h4>
                                                        </h3>
                                                        <img
                                                            src="images/city-life-image-4.jpeg"
                                                            className="image4"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Style
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                Your Ultimate
                                                                Guide to Hanging
                                                                Wall Art and
                                                                Photos Like a
                                                                Pro
                                                            </h4>
                                                        </h3>
                                                        <img
                                                            src="images/city-life-image-5.jpeg"
                                                            className="image5"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box sx={{ flexGrow: 1 }} className="city-life-box">
                    <div className="city-life-box-outer">
                        <div className="city-life-box-inner">
                            <div className="city-life-box-content">
                                <h5 className="city-life">
                                    <span className="city-life-title">
                                        LIFESTYLE
                                    </span>
                                </h5>
                                <div className="city-life-posts">
                                    <div className="city-life-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h2 className='h2'>
                                                            <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Lifestyle
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="entry-title-image">
                                                                How to Be a
                                                                Second Shooter
                                                                at Weddings and
                                                                Why It’s
                                                                Important
                                                            </h1>
                                                        </h2>
                                                        <img
                                                            src="images/lifestyle-image-1.jpeg"
                                                            className="image-l-1"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h2>
                                                            {/* <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Style
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="entry-title-image">
                                                                How to
                                                                Photograph Food
                                                                Coloring or Dye
                                                                Dropped in Water
                                                            </h1> */}
                                                        </h2>
                                                        <img
                                                            src="images/lifestyle-image-2.jpeg"
                                                            className="image-l-2"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            {/* <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Travel
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                How to Add a
                                                                Texture to Your
                                                                Photos – a
                                                                Tutorial on
                                                                Adding Textures
                                                            </h4> */}
                                                        </h3>
                                                        <img
                                                            src="images/lifestyle-image-3.jpeg"
                                                            className="image-l-3"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            {/* <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Lifestyle
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                9 Ways to Use
                                                                Reflections More
                                                                Creatively for
                                                                Stunning
                                                                Photography
                                                            </h4> */}
                                                        </h3>
                                                        <img
                                                            src="images/lifestyle-image-4.jpeg"
                                                            className="image-l-4"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <div className="image">
                                                        <h3>
                                                            {/* <div className="meta-category-image">
                                                                <ul className="post-categories-image">
                                                                    <li>
                                                                        <a href="">
                                                                            Style
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="entry-title-image">
                                                                Your Ultimate
                                                                Guide to Hanging
                                                                Wall Art and
                                                                Photos Like a
                                                                Pro
                                                            </h4> */}
                                                        </h3>
                                                        <img
                                                            src="images/lifestyle-image-5.jpeg"
                                                            className="image-l-5"
                                                        ></img>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default Main
