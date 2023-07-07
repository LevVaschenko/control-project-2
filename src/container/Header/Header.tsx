import React from 'react'
import { useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import logo from 'assets/logo.png'
import footerLogo from 'assets/footer-logo.png'
import './Logo.scss'
import './Buttons.scss'
import './Container.scss'
import './Header.scss'
import Menu from 'components/Menu'

type Props = {}

export default function SearchAppBar(props: Props) {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

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
                                    <img src={isHomePage ? logo : footerLogo} alt="" className="logo" />
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
