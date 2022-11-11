import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './Main.scss'
import './City-life.scss'
import './Lifestyle.scss'
import './Bottom-slider.scss'
import './Street-views.scss'
import './Most-recent.scss'
import './Blog.scss'

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
                <Box sx={{ flexGrow: 1 }} className="most-recent-box">
                    <div className="most-recent-box-outer">
                        <div className="most-recent-box-inner">
                            <div className="most-recent-box-content">
                                <h5 className="most-recent">
                                    <span className="most-recent-title">
                                        MOST RECENT
                                    </span>
                                </h5>
                                <div className="most-recent-posts">
                                    <div className="most-recent-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <div className="most-recent1">
                                                    <div className="most-recent-post-1">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-1">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Travel
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-1">
                                                                    11 Travel
                                                                    Photography
                                                                    Tips When
                                                                    Traveling
                                                                    With Young
                                                                    Children
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-1.jpeg"
                                                                alt=""
                                                                className="most-recent-image-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-2">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-2">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Style
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-2">
                                                                    Equipment
                                                                    Versus
                                                                    Photographer
                                                                    – Which
                                                                    Matters
                                                                    More?
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-2.jpeg"
                                                                alt=""
                                                                className="most-recent-image-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-3">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-3">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Style
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-3">
                                                                    Capture
                                                                    Flower
                                                                    Photography
                                                                    Outside:
                                                                    Diffuse
                                                                    Light With a
                                                                    DIY Studio
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-3.jpeg"
                                                                alt=""
                                                                className="most-recent-image-3"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-4">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-4">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Lifestyle
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-4">
                                                                    6 Scenarios
                                                                    to Try for
                                                                    More
                                                                    Interesting
                                                                    Beach
                                                                    Photography
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-4.jpeg"
                                                                alt=""
                                                                className="most-recent-image-4"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-5">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-5">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Travel
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-5">
                                                                    How to Add a
                                                                    Texture to
                                                                    Your Photos
                                                                    – a Tutorial
                                                                    on Adding
                                                                    Textures
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-5.jpeg"
                                                                alt=""
                                                                className="most-recent-image-5"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-6">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-6">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Style
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-6">
                                                                    5 Essential
                                                                    Tools for
                                                                    Wedding
                                                                    Photography
                                                                    That Aren’t
                                                                    Gear-Related
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-6.jpeg"
                                                                alt=""
                                                                className="most-recent-image-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-7">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-7">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Travel
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-7">
                                                                    Recommended
                                                                    Filters to
                                                                    Use With
                                                                    Black and
                                                                    White
                                                                    Photography
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-7.jpeg"
                                                                alt=""
                                                                className="most-recent-image-7"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-8">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-8">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Style
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-8">
                                                                    7 Things All
                                                                    Photographers
                                                                    Need to Know
                                                                    About
                                                                    Copyright
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-8.jpeg"
                                                                alt=""
                                                                className="most-recent-image-8"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-9">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-9">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Lifestyle
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-9">
                                                                    How to Be a
                                                                    Second
                                                                    Shooter at
                                                                    Weddings and
                                                                    Why It’s
                                                                    Important
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-9.jpeg"
                                                                alt=""
                                                                className="most-recent-image-9"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-10">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-10">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Travel
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-10">
                                                                    Everything
                                                                    You Need to
                                                                    Know About
                                                                    Macro
                                                                    Photography
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-10.jpeg"
                                                                alt=""
                                                                className="most-recent-image-10"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-11">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-11">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Lifestyle
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-11">
                                                                    How to
                                                                    Photograph
                                                                    Fireworks –
                                                                    Everything
                                                                    You Need to
                                                                    Know
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-11.jpeg"
                                                                alt=""
                                                                className="most-recent-image-11"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="most-recent-post-12">
                                                        <div className="image">
                                                            <h3 className="most-recent-info-12">
                                                                <div className="meta-category-image">
                                                                    <ul className="post-categories-image">
                                                                        <li>
                                                                            <a href="">
                                                                                Travel
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h1 className="most-recent-title-12">
                                                                    Do Cheap
                                                                    Photographers
                                                                    Take Work
                                                                    Away From
                                                                    the Rest of
                                                                    Us?
                                                                </h1>
                                                                <div className="post-share">
                                                                    <span className="title-share">
                                                                        Share
                                                                        <div className="cs-icon-arrow-right">
                                                                            <img
                                                                                src="images/arrow-right.png"
                                                                                alt=""
                                                                                className="arrow-right-image"
                                                                            />
                                                                        </div>
                                                                        <div className="social-medias">
                                                                            <img
                                                                                src="images/facebook-logo.png"
                                                                                alt=""
                                                                                className="facebook-logo"
                                                                            />
                                                                            <img
                                                                                src="images/twitter-logo.png"
                                                                                alt=""
                                                                                className="twitter-logo"
                                                                            />
                                                                            <img
                                                                                src="images/pinterest-logo.png"
                                                                                alt=""
                                                                                className="pinterest-logo"
                                                                            />
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </h3>
                                                            <img
                                                                src="
                                                        images/most-recent-image-12.jpeg"
                                                                alt=""
                                                                className="most-recent-image-12"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <div className="load-more-button">
                                                <a className="load-more">
                                                    Load More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box sx={{ flexGrow: 1 }} className="blog-box">
                    <div className="blog-box-outer">
                        <div className="blog-box-inner">
                            <div className="blog-box-content">
                                <h5 className="blog">
                                    <span className="blog-title">BLOG</span>
                                </h5>
                                <div className="blog-posts">
                                    <div className="blog-block-tiles">
                                        <div className="tiles-outer">
                                            <div className="blog-posts">
                                                <div className="blog-post-1">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-1.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Lifestyle
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            How Using Props in
                                                            Portraits Can Make
                                                            Your Photos More
                                                            Interesting
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-post-2">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-2.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Interior
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            How to Protect Your
                                                            Camera Against Lens
                                                            Fungal Damage
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-post-3">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-3.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Travel
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            Do Cheap
                                                            Photographers Take
                                                            Work Away From the
                                                            Rest of Us?
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-post-4">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-4.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Lifestyle
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            9 Ways to Use
                                                            Reflections More
                                                            Creatively for
                                                            Stunning Photography
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-post-5">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-5.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Style
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            Equipment Versus
                                                            Photographer – Which
                                                            Matters More?
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-post-6">
                                                    <div className="blog-image">
                                                        <img
                                                            src="images/blog-image-6.jpeg"
                                                            alt=""
                                                            className="blog-picture"
                                                        />
                                                    </div>
                                                    <div className="blog-text">
                                                        <div className="meta-category-image blog-meta">
                                                            <ul className="post-categories-image blog-post">
                                                                <li>
                                                                    <a href="">
                                                                        Travel
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 className="blog-post-title">
                                                            Tips for Creating
                                                            Awesome Double
                                                            Exposures In-Camera
                                                        </h1>
                                                        <div className="blog-post-description">
                                                            Structured gripped
                                                            tape invisible
                                                            moulded cups for
                                                            suppor firm hold
                                                            strong powermesh
                                                            front liner sport
                                                            detail. Warmth
                                                            comfort hangs
                                                            loosely from the
                                                            body large pocket at
                                                            the front full
                                                            button…
                                                        </div>
                                                        <div className="view-post-button">
                                                            <a className="view-post">
                                                                View Post
                                                            </a>
                                                        </div>
                                                        <div className="blog-post-share">
                                                            <span className="blog-title-share">
                                                                Share
                                                                <div className="cs-icon-arrow-right">
                                                                    <img
                                                                        src="images/blog-arrow-right.png"
                                                                        alt=""
                                                                        className="blog-arrow-right-image"
                                                                    />
                                                                </div>
                                                                <div className="social-medias">
                                                                    <img
                                                                        src="images/blog-facebook-logo.png"
                                                                        alt=""
                                                                        className="facebook-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-twitter-logo.png"
                                                                        alt=""
                                                                        className="twitter-logo"
                                                                    />
                                                                    <img
                                                                        src="images/blog-pinterest-logo.png"
                                                                        alt=""
                                                                        className="pinterest-logo"
                                                                    />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="load-more-button">
                                            <a className="load-more">
                                                Load More
                                            </a>
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
