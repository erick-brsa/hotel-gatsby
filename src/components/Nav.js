import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavTag = styled.nav`
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
    gap: 1rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`

const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    font-family: 'PT Sans', sans-serif;
    &.active {
        border-bottom: 2px solid #fff;
    }
`

export const Nav = () => {
    return (
        <NavTag>
            <NavLink 
                to="/"
                activeClassName='active'
                >
                Inicio
            </NavLink>
            <NavLink 
                to="/nosotros"
                activeClassName='active'
            >
                Nosotros
            </NavLink>
        </NavTag>
    )
}
