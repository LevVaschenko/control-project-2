import { Container } from '@mui/material'
import React from 'react'
import './Footer.scss'
import logo from 'assets/footer-logo.png'
import like from 'assets/like.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className="footer">
                <div className="instagram-images">
                    <div className="q">
                        <img
                            src="images/footer-image-1.jpeg"
                            alt=""
                            className="footer-image-1"
                        />
                        <div className="middle-1">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">5</div>
                        </div>
                    </div>
                    <div className="qq">
                        <img
                            src="images/footer-image-2.jpeg"
                            alt=""
                            className="footer-image-2"
                        />
                        <div className="middle-2">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">6</div>
                        </div>
                    </div>
                    <div className="qqq">
                        <img
                            src="images/footer-image-3.jpeg"
                            alt=""
                            className="footer-image-3"
                        />
                        <div className="middle-3">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">4</div>
                        </div>
                    </div>
                    <div className="qqqq">
                        <img
                            src="images/footer-image-4.jpeg"
                            alt=""
                            className="footer-image-4"
                        />
                        <div className="middle-4">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">1</div>
                        </div>
                    </div>
                    <div className="qqqqq">
                        <img
                            src="images/footer-image-5.jpeg"
                            alt=""
                            className="footer-image-5"
                        />
                        <div className="middle-5">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">4</div>
                        </div>
                    </div>
                    <div className="qqqqqq">
                        <img
                            src="images/footer-image-6.jpeg"
                            alt=""
                            className="footer-image-5"
                        />
                        <div className="middle-6">
                            <img src={like} className="footer-like" />
                            <div className="like-counter">5</div>
                        </div>
                    </div>
                </div>
                <Container maxWidth="lg">
                    <div className="footer-section">
                        <div className="info">
                            <img src={logo}></img>
                            <nav className="categories">
                                <a href="">LIFESTYLE</a>
                                <a href="">TRAVEL</a>
                                <a href="">STYLE</a>
                                <a href="">INTERIOR</a>
                            </nav>
                        </div>
                        <div className="footer-description">
                            Lifestyle Blog & Magazine WordPress Theme
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
