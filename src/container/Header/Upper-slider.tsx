import React from 'react'
import slider from 'assets/slider-picture-1.jpeg'
import './UpperSlider.scss'
import './Reset.css'
import { Container } from '@mui/system'

type Props = {}

const UpperSlider = (props: Props) => {
    return (
        <>
            <div className="slider">
                <Container maxWidth="lg">
                    <div className="row">
                        <div className="slider-text">
                            <div className="slider-category">Lifestyle</div>
                            <div className="slider-title">
                                How Using Props in Portraits Can Make Your
                                Photos More Interesting
                            </div>
                            <div className="slider-button">
                                <a className="button">View Post</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default UpperSlider
