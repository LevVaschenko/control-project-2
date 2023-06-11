import React from 'react'
import MenuItem from './MenuItem'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="navigation-bar-col">
                <ul className="navigation">
                    <MenuItem to="/" className="menuItem-button">Home</MenuItem>
                    <MenuItem to="/lifestyle" className="menuItem-button">Lifestyle</MenuItem>
                    <MenuItem to="/travel" className="menuItem-button">Travel</MenuItem>
                    <MenuItem to="/style" className="menuItem-button">Style</MenuItem>
                    <MenuItem to="/interior" className="menuItem-button">Interior</MenuItem>
                </ul>
            </div>
        </>
    )
}

export default Menu
