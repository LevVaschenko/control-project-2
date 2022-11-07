import React from 'react'
import { TextField } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import './Main.scss'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }} className="city-life-box">
                    <div className="city-life-box-outer">
                        <div className="city-life-box-inner">
                            <div className="city-life-box-content">
                                <h5 className="city-life">
                                    <span className="city-life-title">
                                        City Life
                                    </span>
                                </h5>
                                <div className="city-life-posts">
                                    <div className="city-life-block-tiles">
                                        <div className="tiles-outer">
                                            <Grid
                                                container
                                                spacing={2}
                                                className="tiles-outer"
                                            >
                                                <Grid item xs={6} md={6}>
                                                    <img
                                                        src="images/city-life-image-1.jpeg"
                                                        className="image1"
                                                    ></img>
                                                </Grid>
                                                <Grid item xs={6} md={6}>
                                                    <img
                                                        src="images/city-life-image-2.jpeg"
                                                        className="image2"
                                                    ></img>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <img
                                                        src="images/city-life-image-3.jpeg"
                                                        className="image3"
                                                    ></img>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <img
                                                        src="images/city-life-image-4.jpeg"
                                                        className="image4"
                                                    ></img>
                                                </Grid>
                                                <Grid item xs={6} md={4}>
                                                    <img
                                                        src="images/city-life-image-5.jpeg"
                                                        className="image5"
                                                    ></img>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default Main
