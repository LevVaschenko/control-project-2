import React from 'react'
import MenuItem from './MenuItem'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="navigation-bar-col">
                <ul className="navigation">
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/lifestyle">Lifestyle</MenuItem>
                    <MenuItem to="/travel">Travel</MenuItem>
                    <MenuItem to="/style">Style</MenuItem>
                    <MenuItem to="/interior">Interior</MenuItem>
                </ul>
            </div>
        </>
    )
}

export default Menu
