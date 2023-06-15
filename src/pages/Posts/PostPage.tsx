import React from 'react'
import { useParams } from 'react-router-dom'
import 'container/Array/Posts'
import { posts } from 'container/Array/Posts';

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
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
        </div>
    )
}

export default PostPage
