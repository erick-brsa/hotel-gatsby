import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/react'
import { Header } from './Header'



export const Layout = ({ children }) => {
    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                    }
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h3 {
                        font-family: 'PT Sans', serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
                <title>Gatsby Hotel</title>
            </Helmet>

            <Header />
            {children}
        </>
    )
}
