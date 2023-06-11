import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode
    className?: string
}

const MenuItem = ({ to, children, className }: Props) => {
    return (
        <Button className={className} color="inherit">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'nav-active' : 'nav-item'
                }
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
