import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import '../container/Main/Main.scss'
import '../container/Main/City-life.scss'
import '../container/Main/Lifestyle.scss'
import '../container/Main/Bottom-slider.scss'
import '../container/Main/Street-views.scss'
import '../container/Main/Most-recent.scss'
import '../container/Main/Blog.scss'
import 'pages/Scss/Font.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import UpperSlider from 'container/Main/Upper-slider'
import { posts } from 'container/Array/Posts';

type Props = {}

const Home = () => {
    const lifestylePosts = posts.filter((post) => post.block === 'lifestyle');
    const cityLifePosts = posts.filter((post) => post.block === 'cityLife');
    const streetViewsPosts = posts.filter((post) => post.block === 'streetViews');
    const mostRecentPosts = posts.filter((post) => post.block === 'mostRecent');
    const blogPosts = posts.filter((post) => post.block === 'blog');
    return (
        <>
            <UpperSlider />
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
                                            <Grid container spacing={2} className="tiles-outer">
                                                <div className="city-life-block">
                                                    {cityLifePosts.map((post) => (
                                                        <div
                                                            className={`city-life-post-${post.id}`}
                                                            key={post.id}
                                                        >
                                                            <div className="image">
                                                                <Link to={`/posts/${post.id}`}>
                                                                    <h2 className={`city-life-info-${post.id}`}>
                                                                        <div className="meta-category-image">
                                                                            <ul className="post-categories-image">
                                                                                <li>
                                                                                    <a
                                                                                        href={`http://localhost:3000/${post.category}`}
                                                                                        className={`category-${post.size} category-${post.category.toLowerCase()}`}
                                                                                    >
                                                                                        {post.category}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h1 className={`city-life-title-${post.id}`}>
                                                                            {post.title}
                                                                        </h1>
                                                                    </h2>
                                                                    <img
                                                                        src={post.image}
                                                                        alt=""
                                                                        className={`city-life-image-${post.id}`}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
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
                                                    {lifestylePosts.map((post) => (
                                                        <div className={`lifestyle-post-${post.id}`} key={post.id}>
                                                            <div className="image">
                                                                <Link to={`/posts/${post.id}`}>
                                                                    <h2 className={`lifestyle-info-${post.id}`}>
                                                                        <div className="meta-category-image">
                                                                            <ul className="post-categories-image">
                                                                                <li>
                                                                                    <a href={`http://localhost:3000/${post.category}`} className={`category-${post.size} category-${post.category.toLowerCase()}`}>
                                                                                        {post.category}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h1 className={`entry-title-image post-title-${post.size}`}>
                                                                            {post.title}
                                                                        </h1>
                                                                    </h2>
                                                                    <img src={post.image} alt="" className={`lifestyle-image-${post.id}`} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
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
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop={true}
                cssMode={true}
                pagination={{
                    clickable: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="slider-1">
                    <Container maxWidth="lg">
                        <div className="row">
                            <div className="slider-text">
                                <div className="slider-category">
                                    <a href="http://localhost:3000/style">
                                        Style
                                    </a>
                                </div>
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
                </SwiperSlide>
                <SwiperSlide className="slider-2">
                    <Container maxWidth="lg">
                        <div className="row">
                            <div className="slider-text">
                                <div className="slider-category">
                                    <a href="http://localhost:3000/lifestyle">
                                        Lifestyle
                                    </a>
                                </div>
                                <div className="slider-title">
                                    How to Shoot a Self Portrait to Support Your
                                    Brand Identity
                                </div>
                                <div className="slider-button">
                                    <a className="button">View Post</a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="slider-3">
                    <Container maxWidth="lg">
                        <div className="row">
                            <div className="slider-text">
                                <div className="slider-category">
                                    <a href="http://localhost:3000/interior">
                                        Interior
                                    </a>
                                </div>
                                <div className="slider-title">
                                    How to Use Vibrant Colors in Photography
                                    With Great Success
                                </div>
                                <div className="slider-button">
                                    <a className="button">View Post</a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SwiperSlide>
            </Swiper>
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
                                                    {streetViewsPosts.map((post) => (
                                                        <div
                                                            className={`street-views-post street-views-post-${post.id}`}
                                                            key={post.id}
                                                        >
                                                            <div className="image">
                                                                <Link to={`/posts/${post.id}`}>
                                                                    <h2 className={`street-views-info-${post.id}`}>
                                                                        <div className="meta-category-image">
                                                                            <ul className="post-categories-image">
                                                                                <li>
                                                                                    <a
                                                                                        href={`http://localhost:3000/${post.category}`}
                                                                                        className={`category-${post.size} category-${post.category.toLowerCase()}`}
                                                                                    >
                                                                                        {post.category}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h1 className={`street-views-title-${post.id}`}>
                                                                            {post.title}
                                                                        </h1>
                                                                        {post.id === 13 && (
                                                                            <div className="slider-button">
                                                                                <a className="button" href={`http://localhost:3000/posts/${post.id}`}>
                                                                                    View Post
                                                                                </a>
                                                                            </div>
                                                                        )}
                                                                    </h2>
                                                                    <img
                                                                        src={post.image}
                                                                        alt=""
                                                                        className={`street-views-image-${post.id}`}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
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
                                                    {mostRecentPosts.map((post) => (
                                                        <div className={`most-recent-post-${post.id}`} key={post.id}>
                                                            <div className="image">
                                                                <Link to={`/posts/${post.id}`}>
                                                                    <h2 className={`most-recent-info-${post.id}`}>
                                                                        <div className="meta-category-image">
                                                                            <ul className="post-categories-image">
                                                                                <li>
                                                                                    <a href={`http://localhost:3000/${post.category}`} className={`category-${post.size} category-${post.category.toLowerCase()}`}>
                                                                                        {post.category}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h1 className={`entry-title-image post-title-${post.size}`}>
                                                                            {post.title}
                                                                        </h1>
                                                                        {post.id >= 16 && post.id <= 27 && (
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
                                                                        )}
                                                                    </h2>
                                                                    <img src={post.image} alt="" className={`most-recent-image-${post.id}`} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Grid>
                                            <div className="load-more-button most-recent-button">
                                                <a
                                                    className="load-more"
                                                    href="http://localhost:3000/"
                                                >
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
                                                {blogPosts.map((post) => (
                                                    <div className={`blog-post-${post.id}`} key={post.id}>
                                                        <div className="blog-image">
                                                            <Link to={`/posts/${post.id}`}>
                                                                <img src={post.image} alt="" className="blog-picture" />
                                                            </Link>
                                                        </div>
                                                        <div className="blog-text">
                                                            <div className="meta-category-image blog-meta">
                                                                <ul className="post-categories-image blog-post">
                                                                    <li>
                                                                        <Link to={`${post.category.toLowerCase()}`}>{post.category}</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h1 className="blog-post-title">
                                                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                                            </h1>
                                                            <div className="blog-post-description">{post.description}</div>
                                                            <div className="view-post-button">
                                                                <Link to={`/posts/${post.id}`} className="view-post">
                                                                    View Post
                                                                </Link>
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
                                                ))}
                                            </div>
                                        </div>
                                        <div className="load-more-button blog-button">
                                            <a
                                                className="load-more"
                                                href="http://localhost:3000/"
                                            >
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

export default Home
