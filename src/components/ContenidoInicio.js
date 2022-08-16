import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;   
    }

    p {
        line-height: 2;
        margin: 0;
    }
`

export const ContenidoInicio = () => {

    const information = useStaticQuery(graphql`
        query {
        allDatoCmsPage(filter: { slug: {eq: "inicio"} }) {
            nodes {
                title
                content
                image {
                    fluid {
                        ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const { title, content, image } = information.allDatoCmsPage.nodes[0]

    return (
        <>
            <h2
                css={css`
                    text-align: center;
                    margin-top: 4rem;
                    font-size: 4rem;
                `}
            >{title}</h2>
            <TextoInicio>
                <p>{content}</p>
                <Image 
                    fluid={image.fluid}
                    // alt={image.fluid.src} 
                />
            </TextoInicio>
        </>
    )
}
