import { Container } from '@mui/system'
import Home from 'pages/Home'
import InteriorPage from 'pages/InteriorPage'
import LifestylePage from 'pages/LifestylePage'
import StylePage from 'pages/StylePage'
import TravelPage from 'pages/TravelPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/lifestyle' element={<LifestylePage/>}/>
                    <Route path='/travel' element={<TravelPage/>}/>
                    <Route path='/style' element={<StylePage/>}/>
                    <Route path='/interior' element={<InteriorPage/>}/>
                </Routes>
        </main>
    )
}

export default Main
