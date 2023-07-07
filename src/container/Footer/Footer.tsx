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
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BudeAMoglqR/">
                            <img src="images/footer-image-1.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">4</div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BksFRJZAxG0/">
                            <img src="images/footer-image-2.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">7</div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BksFPdqAx6W/">
                            <img src="images/footer-image-3.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">4</div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BksFNYcg3g6/">
                            <img src="images/footer-image-4.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">2</div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BksFK2RAxyk/">
                            <img src="images/footer-image-5.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">1</div>
                            </div>
                        </a>
                    </div>
                    <div className="instagram-image">
                        <a href="https://www.instagram.com/p/BksE1DzA7My/">
                            <img src="images/footer-image-6.jpeg" alt="" className='footer-image' />
                            <div className="image-like">
                                <img src={like} alt="" className='footer-like' />
                                <div className="like-counter">1</div>
                            </div>
                        </a>
                    </div>
                </div>
                <Container maxWidth="lg">
                    <div className="footer-section">
                        <div className="info">
                            <img src={logo} alt="" className='footer-logo'></img>
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
