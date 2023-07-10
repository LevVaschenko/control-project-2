import React from 'react'
import './UpperSlider.scss'
import '../Header/Reset.css'
import { Container } from '@mui/system'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { posts } from 'container/Array/Posts';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

type Props = {}

export default () => {
    return (
        <>
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                cssMode={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                    {posts
                    .filter((post) => post.id === 28)
                    .map((post) => (
                        <SwiperSlide key={post.id} className="slider1">
                            <Link to={`/posts/${post.id}`} className='slider-link'>
                                <Container maxWidth="lg">
                                    <div className="row">
                                        <div className="upper-slider-text">
                                            <div className="slider-category">
                                                <Link to={`/${post.category.toLowerCase()}`}>
                                                    {post.category}
                                                </Link>
                                            </div>
                                            <div className="slider-title">
                                                <Link to={`/posts/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className="slider-button">
                                                <Link to={`/posts/${post.id}`} className="button">
                                                    View Post
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Link>
                        </SwiperSlide>
                    ))}
                {posts
                    .filter((post) => post.id === 29)
                    .map((post) => (
                        <SwiperSlide key={post.id} className="slider2">
                            <Link to={`/posts/${post.id}`} className='slider-link'>
                                <Container maxWidth="lg">
                                    <div className="row">
                                        <div className="upper-slider-text">
                                            <div className="slider-category">
                                                <Link to={`/${post.category.toLowerCase()}`}>
                                                    {post.category}
                                                </Link>
                                            </div>
                                            <div className="slider-title">
                                                <Link to={`/posts/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className="slider-button">
                                                <Link to={`/posts/${post.id}`} className="button">
                                                    View Post
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Link>
                        </SwiperSlide>
                    ))}
                {posts
                    .filter((post) => post.id === 30)
                    .map((post) => (
                        <SwiperSlide key={post.id} className="slider3">
                            <Link to={`/posts/${post.id}`} className='slider-link'>
                                <Container maxWidth="lg">
                                    <div className="row">
                                        <div className="upper-slider-text">
                                            <div className="slider-category">
                                                <Link to={`/${post.category.toLowerCase()}`}>
                                                    {post.category}
                                                </Link>
                                            </div>
                                            <div className="slider-title">
                                                <Link to={`/posts/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className="slider-button">
                                                <Link to={`/posts/${post.id}`} className="button">
                                                    View Post
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
