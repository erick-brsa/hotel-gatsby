import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Button = styled(Link)`
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(42, 62, 80, 0.85);
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
`

export const BedroomPreview = ({ habitacion }) => {

    const { title, content, image, slug } = habitacion
    
  return (
        <article
            css={css`
                border: 1px solid #e1e1e1;
            `}
        >
            <Image
                fluid={image.fluid}
                />
            <div
                css={css` 
                    padding: 2rem; 
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3>
                <p>{content}</p>
                <Button to={`/${slug}`}>Ver Habitación</Button>
            </div>
        </article>
  )
}
