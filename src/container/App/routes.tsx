import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import PostPage from 'pages/Posts/PostPage';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/posts/:postId" element={<PostPage />} />
            {/* Добавьте другие маршруты */}
        </Routes>
    )
}

export default AppRoutes;
