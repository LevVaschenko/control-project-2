import React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'container/Array/Posts'
import { posts } from 'container/Array/Posts';
import { Box, Container } from '@mui/material';
import './PostPage.scss'

const PostPage = () => {
    const { postId } = useParams<{ postId?: string }>()

    if (!postId) {
        return <div>Post ID not provided</div>
    }

    const post = posts.find((post) => post.id === parseInt(postId))

    if (!post) {
        return <div>Post not found</div>
    }

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
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                </Box>
            </Container>
        </>
    )
}

export default PostPage
