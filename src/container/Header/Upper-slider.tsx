import React from 'react'
import slider from 'assets/slider-picture-1.jpeg'
import './UpperSlider.scss'
import './Reset.css'

type Props = {}

const UpperSlider = (props: Props) => {
    return (
        <>
            <div className="slider-images">
                <img src={slider} className="slider-image-1"></img>
                <div className="slider-text-1">
                    <div className="meta-category">
                        <ul className="post-categories">
                            <li>
                                <a href="">Lifestyle</a>
                            </li>
                        </ul>
                    </div>
                    <h1 className="entry-title">
                        How Using Props in Portraits Can Make Your Photos More
                        Interesting
                    </h1>
                    <div className="view-post-button">
                        <div className="wp-block-u">
                            <a href="" className="slider-button-text">
                                View Post
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperSlider
