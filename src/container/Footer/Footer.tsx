import { Container } from '@mui/material'
import React from 'react'
import './Footer.scss'
import logo from 'assets/footer-logo.png'
import like from 'assets/like.png'
import MenuItem from 'components/MenuItem'
import 'components/Menu.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className="footer">
                <div className="instagram-images">
                    <div className="q">
                        <a href="https://www.instagram.com/p/BudeAMoglqR/">
                            <img
                                src="images/footer-image-1.jpeg"
                                alt=""
                                className="footer-image-1"
                            />
                        </a>
                        <div className="middle-1">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">4</div>
                        </div>
                    </div>
                    <div className="qq">
                        <a href="https://www.instagram.com/p/BksFRJZAxG0/">
                            <img
                                src="images/footer-image-2.jpeg"
                                alt=""
                                className="footer-image-2"
                            />
                        </a>
                        <div className="middle-2">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">6</div>
                        </div>
                    </div>
                    <div className="qqq">
                        <a href="https://www.instagram.com/p/BksFPdqAx6W/">
                            <img
                                src="images/footer-image-3.jpeg"
                                alt=""
                                className="footer-image-3"
                            />
                        </a>
                        <div className="middle-3">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">4</div>
                        </div>
                    </div>
                    <div className="qqqq">
                        <a href="https://www.instagram.com/p/BksFNYcg3g6/">
                            <img
                                src="images/footer-image-4.jpeg"
                                alt=""
                                className="footer-image-4"
                            />
                        </a>
                        <div className="middle-4">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">2</div>
                        </div>
                    </div>
                    <div className="qqqqq">
                        <a href="https://www.instagram.com/p/BksFK2RAxyk/">
                            <img
                                src="images/footer-image-5.jpeg"
                                alt=""
                                className="footer-image-5"
                            />
                        </a>
                        <div className="middle-5">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">1</div>
                        </div>
                    </div>
                    <div className="qqqqqq">
                        <a href="https://www.instagram.com/p/BksE1DzA7My/">
                            <img
                                src="images/footer-image-6.jpeg"
                                alt=""
                                className="footer-image-5"
                            />
                        </a>
                        <div className="middle-6">
                            <img src={like} alt="" className="footer-like" />
                            <div className="like-counter">1</div>
                        </div>
                    </div>
                </div>
                <Container maxWidth="lg">
                    <div className="footer-section">
                        <div className="info">
                            <img src={logo} alt=""></img>
                            <nav className="categories">
                                <MenuItem to="/">Home</MenuItem>
                                <MenuItem to="/lifestyle">Lifestyle</MenuItem>
                                <MenuItem to="/travel">Travel</MenuItem>
                                <MenuItem to="/style">Style</MenuItem>
                                <MenuItem to="/interior">Interior</MenuItem>
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
