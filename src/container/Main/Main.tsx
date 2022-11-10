import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './Main.scss'
import './City-life.scss'
import './Lifestyle.scss'
import './Bottom-slider.scss'
import './Street-views.scss'

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
                <Box sx={{ flexGrow: 1 }} className="lifestyle-box">
                    <div className="lifestyle-box-outer">
                        <div className="lifestyle-box-inner">
                            <div className="lifestyle-box-content">
                                <h5 className="lifestyle">
                                    <span className="lifestyle-title">
                                        LIFESTYLE
                                    </span>
                                </h5>
                                <div className="lifestyle-posts">
                                    <div className="lifestyle-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <div className="parent">
                                                    <div className="lifestyle-post-1">
                                                        <div className="image">
                                                            <h2 className="lifestyle-info-1">
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
                                                                    Equipment
                                                                    Versus
                                                                    Photographer
                                                                    – Which
                                                                    Matters
                                                                    More?
                                                                </h1>
                                                            </h2>
                                                            <img
                                                                src="
                                                        images/lifestyle-image-1.jpeg"
                                                                alt=""
                                                                className="lifestyle-image-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lifestyle-post-2">
                                                        <div className="image">
                                                            <h3 className="lifestyle-info-2">
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
                                                                    Tips for
                                                                    Creating
                                                                    Awesome
                                                                    Double
                                                                    Exposures
                                                                    In-Camera
                                                                </h4>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/lifestyle-image-2.jpeg"
                                                                alt=""
                                                                className="lifestyle-image-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lifestyle-post-3">
                                                        <div className="image">
                                                            <h3 className="lifestyle-info-3">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Interior
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h4 className="entry-title-image">
                                                                    5 Top Tips
                                                                    for
                                                                    Marketing
                                                                    Your
                                                                    Photography
                                                                    Business
                                                                    Successfully
                                                                </h4>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/lifestyle-image-3.jpeg"
                                                                alt=""
                                                                className="lifestyle-image-3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lifestyle-post-4">
                                                        <div className="image">
                                                            <h3 className="lifestyle-info-4">
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
                                                                    An
                                                                    Introduction
                                                                    to Amazing
                                                                    Abstract
                                                                    Automotive
                                                                    Photography
                                                                </h4>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/lifestyle-image-4.jpeg"
                                                                alt=""
                                                                className="lifestyle-image-4"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="lifestyle-post-5">
                                                        <div className="image">
                                                            <h3 className="lifestyle-info-5">
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
                                                                    5 Essential
                                                                    Tools for
                                                                    Wedding
                                                                    Photography
                                                                    That Aren’t
                                                                    Gear-Related
                                                                </h4>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/lifestyle-image-5.jpeg"
                                                                alt=""
                                                                className="lifestyle-image-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
            <div className="bottom-slider">
                <Container maxWidth="lg">
                    <div className="row">
                        <div className="slider-text">
                            <div className="slider-category">Style</div>
                            <div className="slider-title">
                                3 Tips for Becoming a Unique and Successful
                                Photographer
                            </div>
                            <div className="slider-button">
                                <a className="button">View Post</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <Box sx={{ flexGrow: 1 }} className="street-views-box">
                    <div className="street-views-box-outer">
                        <div className="street-views-box-inner">
                            <div className="street-views-box-content">
                                <h5 className="street-views">
                                    <span className="street-views-title">
                                        STREET VIEWS
                                    </span>
                                </h5>
                                <div className="street-views-posts">
                                    <div className="street-views-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <div className="street-views1">
                                                    <div className="street-views-post-1">
                                                        <div className="image">
                                                            <h3 className="street-views-info-1">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Lifestyle
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="street-views-title-1">
                                                                    The 9 Most
                                                                    Powerful
                                                                    Composition
                                                                    Rules for
                                                                    Dynamic
                                                                    Landscape
                                                                    Shots
                                                                </h1>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/street-views-image-1.jpeg"
                                                                alt=""
                                                                className="street-views-image-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="street-views-post-2">
                                                        <div className="image">
                                                            <h3 className="street-views-info-2">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Lifestyle
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="street-views-title-2">
                                                                    How to
                                                                    Create a
                                                                    Panoramic
                                                                    Photograph
                                                                    With a
                                                                    Tilt-Shift
                                                                    Lens
                                                                </h1>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/street-views-image-2.jpeg"
                                                                alt=""
                                                                className="street-views-image-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="street-views-post-3">
                                                        <div className="image">
                                                            <h2 className="street-views-info-3">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Interior
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="street-views-title-3">
                                                                    Underexposure
                                                                    vs
                                                                    Overexposure
                                                                    – a
                                                                    Beginner’s
                                                                    Guide
                                                                </h1>
                                                                <div className="slider-button">
                                                                    <a className="button">
                                                                        View
                                                                        Post
                                                                    </a>
                                                                </div>
                                                            </h2>
                                                            <img
                                                                src="
                                                        images/street-views-image-3.jpeg"
                                                                alt=""
                                                                className="street-views-image-3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="street-views-post-4">
                                                        <div className="image">
                                                            <h3 className="street-views-info-4">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Style
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="street-views-title-4">
                                                                    How to
                                                                    Photograph
                                                                    Interior
                                                                    Domes of
                                                                    Popular
                                                                    Landmarks
                                                                </h1>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/street-views-image-4.jpeg"
                                                                alt=""
                                                                className="street-views-image-4"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="street-views-post-5">
                                                        <div className="image">
                                                            <h3 className="street-views-info-5">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Interior
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="street-views-title-5">
                                                                    The
                                                                    Importance
                                                                    of
                                                                    Straightening
                                                                    the Horizon
                                                                    and Aligning
                                                                    Lines
                                                                </h1>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/street-views-image-5.jpeg"
                                                                alt=""
                                                                className="street-views-image-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
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
