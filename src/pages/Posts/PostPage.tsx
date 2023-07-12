import React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'container/Array/Posts'
import { posts } from 'container/Array/Posts';
import { Box, Container } from '@mui/material';
import './PostPage.scss'
import facebook from 'assets/blog-facebook-logo.png'
import twitter from 'assets/blog-twitter-logo.png'
import pinterest from 'assets/blog-pinterest-logo.png'

const PostPage = () => {
    const { postId } = useParams<{ postId?: string }>()

    if (!postId) {
        return <div>Post ID not provided</div>
    }

    const post = posts.find((post) => post.id === parseInt(postId))

    if (!post) {
        return <div>Post not found</div>
    }

    const mediaShares = [555, 258, 453];
    const totalShares = mediaShares.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const formattedShares = totalShares > 1000 ? `${Math.floor(totalShares / 1000)}K` : totalShares;
    const formattedMediaShares = mediaShares.map((shares) => (shares > 1000 ? `${Math.floor(shares / 1000)}K` : shares));

    return (
        <>
            <div className="page-header">
                <div className="page-image">
                    <Container>
                        <div className="page-info">
                            <div className="slider-category">
                                <Link to={`/${post.category.toLowerCase()}`}>
                                    {post.category}
                                </Link>
                            </div>
                            <div className="post-title">
                                {post.title}
                            </div>
                            <ul className="page-meta">
                                <li className="page-date">July 10, 2023</li>
                                <li className="page-author">Joanna Wellick</li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>
            <Container maxWidth="md">
                <Box sx={{ flexGrow: 1 }} className='post-content'>
                    <div className="col-2">
                        <div className="post-links">
                            <div className="total-shares">
                                <div className="shares-amount">{formattedShares}</div>
                                <div className="total-shares-title">Shares</div>
                            </div>
                            <div className="facebook-share">
                                <img src={facebook} alt="" className="facebook-share-image" />
                                <div className="media-shares-amount">{formattedMediaShares[0]}</div>
                            </div>
                            <div className="twitter-share">
                                <img src={twitter} alt="" className="twitter-share-image" />
                                <div className="media-shares-amount">{formattedMediaShares[1]}</div>
                            </div>
                            <div className="pinterest-share">
                                <img src={pinterest} alt="" className="pinterest-share-image" />
                                <div className="media-shares-amount">{formattedMediaShares[2]}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11">
                        <div className="post-text">
                            <p className='first-paragraph'>Structured gripped tape invisible moulded cups for suppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.</p>
                            <p>Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp.</p>
                            <p>Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default PostPage
