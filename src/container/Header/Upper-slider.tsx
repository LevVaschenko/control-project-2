import React from 'react'
import slider from 'assets/slider-picture-1.jpeg'
import './UpperSlider.scss'
import './Reset.css'
import { Container } from '@mui/system'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type Props = {}

export default () => {
    return (
        <Swiper
            className="swiper"
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
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
            <SwiperSlide className="slider1">
                <Container maxWidth="lg">
                    <div className="row">
                        <div className="slider-text">
                            <div className="slider-category">Lifestyle</div>
                            <div className="slider-title">
                                How Using Props in Portraits Can Make Your
                                Photos More Interesting
                            </div>
                            <div className="slider-button">
                                <a className="button">View Post</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="slider2">
                <Container maxWidth="lg">
                    <div className="row">
                        <div className="slider-text">
                            <div className="slider-category">Interior</div>
                            <div className="slider-title">
                                How to Protect Your Camera Against Lens Fungal
                                Damage
                            </div>
                            <div className="slider-button">
                                <a className="button">View Post</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide className="slider3">
                <Container maxWidth="lg">
                    <div className="row">
                        <div className="slider-text">
                            <div className="slider-category">Travel</div>
                            <div className="slider-title">
                            Do Cheap Photographers Take Work Away From the Rest of Us?
                            </div>
                            <div className="slider-button">
                                <a className="button">View Post</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
        </Swiper>
    )
}
