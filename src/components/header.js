import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Nav } from './Nav'

const StyledLink = styled(Link)`
	  color: #fff;
	  text-decoration: none;
	  text-align: center;
`

export const Header = () => {
	return (
		<header
			css={css`
				background-color: #222;
				padding: 1rem;
			`}
		>
			<div
				css={css`
					max-width: 1200px;
					margin: 0 auto;

					@media (min-width: 768px) {
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
				`}
			>
				<StyledLink 
					to="/"
				>
					<h1>
						Hotel Gatsby
					</h1>
				</StyledLink>
				
				<Nav />
			</div>
		</header>
	)
}
