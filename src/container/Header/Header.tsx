import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import logo from 'assets/logo.png'
import './Logo.scss'
import './Buttons.scss'
import './Container.scss'
import './Header.scss'
import UpperSlider from '../Main/Upper-slider'
import Menu from 'components/Menu'

type Props = {}

export default function SearchAppBar(props: Props) {
    return (
        <>
            <Container className="container">
                <Box sx={{ flexGrow: 1 }} className="box">
                    <AppBar position="static" className="app-bar">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                className="logo-container"
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                <a href="http://localhost:3000/">
                                    <img
                                        src={logo}
                                        alt=""
                                        className="logo"
                                    ></img>
                                </a>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Menu />
                </Box>
            </Container>
        </>
    )
}
