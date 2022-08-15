import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, 0.8), rgba(34, 49, 63, 0.8));
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
        @media (min-width: 768px) {
            fonts-size: 6rem;
        }
    }
    
    p {
        font-size: 2rem;
        @media (min-width: 768px) {
            fonts-size: 3.2rem;
        }
    }
`

export const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "8.jpg"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                   }
                }
            }
        }
    `)

    return (
        <ImageBackground 
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <TextoImagen>
                <h1>¡Bienvenido a Hotel Gatsby!</h1> 
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBackground>
    )
}
