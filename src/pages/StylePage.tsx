import { Container } from '@mui/material'
import './Scss/LifestylePage.scss'
import './Scss/StylePage.scss'
import React from 'react'
import like from 'assets/like.png'
import image1 from 'assets/slider-picture-1.jpeg'
import image2 from 'assets/slider-picture-2.jpeg'
import image3 from 'assets/slider-picture-3.jpeg'
import image4 from 'assets/city-life-image-4.jpeg'
import image5 from 'assets/lifestyle-image-1.jpeg'

type Props = {}

const LifestylePage = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg" className="lifestyle-page-container">
                <div className="main-content">
                    <div className="col-8">
                        <div className="name">Style</div>
                        <div className="lifestyle-quantity">10 posts</div>
                        <div className="col-12 content">
                            <header className="entry-header">
                                <span className="post-categories lifestyle-page-category">
                                    Style
                                </span>
                                <div className="entry-title-pages lifestyle-page-article-title">
                                    Equipment Versus Photographer – Which
                                    Matters More?
                                </div>
                                <div className="post-media">
                                    <img
                                        src="images/style-page.jpeg"
                                        alt=""
                                        className="style-page-image main-page-image"
                                    />
                                </div>
                            </header>
                        </div>
                        <div className="col-6 content">
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-1.jpeg"
                                    alt=""
                                    width="380"
                                    height="253"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            5 Essential Tools for Wedding
                                            Photography That Aren’t Gear-Related
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-2.jpeg"
                                    alt=""
                                    width="380"
                                    height="523"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            How to Photograph Food Coloring or
                                            Dye Dropped in Water
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-3.jpeg"
                                    alt=""
                                    width="380"
                                    height="286"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            Photography Rights and Licensing
                                            Your Work for Commercial Use
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-4.jpeg"
                                    alt=""
                                    width="380"
                                    height="253"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            How to Photograph Interior Domes of
                                            Popular Landmarks
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-5.jpeg"
                                    alt=""
                                    width="380"
                                    height="570"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            Capture Flower Photography Outside:
                                            Diffuse Light With a DIY Studio
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 content2">
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-6.jpeg"
                                    alt=""
                                    width="380"
                                    height="570"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            3 Tips for Becoming a Unique and
                                            Successful Photographer
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-7.jpeg"
                                    alt=""
                                    width="380"
                                    height="253"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            Your Ultimate Guide to Hanging Wall
                                            Art and Photos Like a Pro
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-8.jpeg"
                                    alt=""
                                    width="380"
                                    height="629"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            The Complete Guide to Landscape
                                            Photography: 185 Tips
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="lifestyle-page-post">
                                <img
                                    src="images/style-page-9.jpeg"
                                    alt=""
                                    width="380"
                                    height="253"
                                    className="lifestyle-page-image"
                                />
                                <div className="post-inner123">
                                    <header className="entry-header1">
                                        <span className="post-categories lifestyle-page-category">
                                            Style
                                        </span>
                                        <div className="post-title-pages lifestyle-page-article-title">
                                            7 Things All Photographers Need to
                                            Know About Copyright
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="col-4 lifestyle-page-right-info">
                        <div className="lifestyle-post-4 abcdefg">
                            <div className="image abcdefg">
                                <h3 className="lifestyle-info-4 abcdefg">
                                    <h4 className="entry-title-image">
                                        How to Shoot Product Photography With
                                        Single Strobe Lighting
                                    </h4>
                                </h3>
                                <img className="lifestyle-image-4 right-info abcdefg" />
                            </div>
                        </div>
                        <div className="lifestyle-page-instagram">
                            Instagram
                        </div>
                        <div className="parent1234">
                            <div className="div1">
                                <div className="lifestyle-page-images">
                                    <div className="w">
                                        <a href="https://www.instagram.com/p/BudeAMoglqR/">
                                            <img
                                                src="images/footer-image-1.jpeg"
                                                alt=""
                                                className="lifestyle-page-image-1"
                                            />
                                        </a>
                                        <div className="lifestyle-page-middle">
                                            <img
                                                src={like}
                                                alt=""
                                                className="lifestyle-page-like"
                                            />
                                            <div className="like-counter">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div2">
                                <div className="lifestyle-page-images1">
                                    <div className="w">
                                        <a href="https://www.instagram.com/p/BksFPdqAx6W/">
                                            <img
                                                src="images/footer-image-3.jpeg"
                                                alt=""
                                                className="lifestyle-page-image-1"
                                            />
                                        </a>
                                        <div className="lifestyle-page-middle">
                                            <img
                                                src={like}
                                                alt=""
                                                className="lifestyle-page-like"
                                            />
                                            <div className="like-counter">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div3">
                                <div className="lifestyle-page-images">
                                    <div className="w">
                                        <a href="https://www.instagram.com/p/BksFRJZAxG0/">
                                            <img
                                                src="images/footer-image-2.jpeg"
                                                alt=""
                                                className="lifestyle-page-image-1"
                                            />
                                        </a>
                                        <div className="lifestyle-page-middle">
                                            <img
                                                src={like}
                                                alt=""
                                                className="lifestyle-page-like"
                                            />
                                            <div className="like-counter">
                                                6
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div4">
                                <div className="lifestyle-page-images1">
                                    <div className="w">
                                        <a href="https://www.instagram.com/p/BksFNYcg3g6/">
                                            <img
                                                src="images/footer-image-4.jpeg"
                                                alt=""
                                                className="lifestyle-page-image-1"
                                            />
                                        </a>
                                        <div className="lifestyle-page-middle">
                                            <img
                                                src={like}
                                                alt=""
                                                className="lifestyle-page-like"
                                            />
                                            <div className="like-counter">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lifestyle-page-follow-us">
                            <div className="follow-us">Follow us</div>
                        </div>
                        <div className="lifestyle-page-social-icons">
                            <a href="https://www.facebook.com/codesupplyco">
                                <img
                                    src="images/blog-facebook-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <a href="https://twitter.com/envato">
                                <img
                                    src="images/blog-twitter-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <a href="https://www.instagram.com/codesupply.co/">
                                <img
                                    src="images/blog-instagram-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <a href="https://www.pinterest.com/envato/">
                                <img
                                    src="images/blog-pinterest-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <a href="https://www.youtube.com/user/envato">
                                <img
                                    src="images/blog-youtube-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <a href="https://vimeo.com/envato">
                                <img
                                    src="images/blog-vimeo-logo.png"
                                    alt=""
                                    className="lifestyle-page-logo"
                                />
                            </a>
                            <div className="social-numbers">
                                <div className="social-number">33</div>
                                <div className="social-number">70K</div>
                                <div className="social-number">48</div>
                                <div className="social-number">13K</div>
                                <div className="social-number">167K</div>
                                <div className="social-number">21</div>
                            </div>
                        </div>
                        <div className="lifestyle-page-trending-posts">
                            <div className="trending-posts-title">
                                Trending Posts
                            </div>
                            <div className="trending-posts">
                                <ul>
                                    <li className="lifestyle-page-post-item">
                                        <div className="lifestyle-page-post-image">
                                            <img
                                                src={image1}
                                                alt=""
                                                className="lifestyle-page-trending-image"
                                            />
                                            <div className="lifestyle-page-post-number">
                                                1
                                            </div>
                                        </div>
                                        <div className="lifestyle-page-post-title">
                                            <div className="lifestyle-page-post-name">
                                                How Using Props in Portraits Can
                                                Make Your Photos More
                                                Interesting
                                            </div>
                                            <div className="lifestyle-page-post-date">
                                                May 24, 2019
                                            </div>
                                        </div>
                                    </li>
                                    <li className="lifestyle-page-post-item">
                                        <div className="lifestyle-page-post-image">
                                            <img
                                                src={image2}
                                                alt=""
                                                className="lifestyle-page-trending-image"
                                            />
                                            <div className="lifestyle-page-post-number">
                                                2
                                            </div>
                                        </div>
                                        <div className="lifestyle-page-post-title">
                                            <div className="lifestyle-page-post-name">
                                                How to Protect Your Camera
                                                Against Lens Fungal Damage
                                            </div>
                                            <div className="lifestyle-page-post-date">
                                                May 23, 2019
                                            </div>
                                        </div>
                                    </li>
                                    <li className="lifestyle-page-post-item">
                                        <div className="lifestyle-page-post-image">
                                            <img
                                                src={image3}
                                                alt=""
                                                className="lifestyle-page-trending-image"
                                            />
                                            <div className="lifestyle-page-post-number">
                                                3
                                            </div>
                                        </div>
                                        <div className="lifestyle-page-post-title">
                                            <div className="lifestyle-page-post-name">
                                                Do Cheap Photographers Take Work
                                                Away From the Rest of Us?
                                            </div>
                                            <div className="lifestyle-page-post-date">
                                                May 23, 2019
                                            </div>
                                        </div>
                                    </li>
                                    <li className="lifestyle-page-post-item">
                                        <div className="lifestyle-page-post-image">
                                            <img
                                                src={image4}
                                                alt=""
                                                className="lifestyle-page-trending-image"
                                            />
                                            <div className="lifestyle-page-post-number">
                                                4
                                            </div>
                                        </div>
                                        <div className="lifestyle-page-post-title">
                                            <div className="lifestyle-page-post-name">
                                                9 Ways to Use Reflections More
                                                Creatively for Stunning
                                                Photography
                                            </div>
                                            <div className="lifestyle-page-post-date">
                                                May 23, 2019
                                            </div>
                                        </div>
                                    </li>
                                    <li className="lifestyle-page-post-item">
                                        <div className="lifestyle-page-post-image">
                                            <img
                                                src={image5}
                                                alt=""
                                                className="lifestyle-page-trending-image"
                                            />
                                            <div className="lifestyle-page-post-number">
                                                5
                                            </div>
                                        </div>
                                        <div className="lifestyle-page-post-title">
                                            <div className="lifestyle-page-post-name">
                                                Equipment Versus Photographer –
                                                Which Matters More?
                                            </div>
                                            <div className="lifestyle-page-post-date">
                                                May 22, 2019
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </>
    )
}

export default LifestylePage
