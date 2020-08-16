import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
               author
            }
        }
    }
    `)
    return(
        <footer>
            <h6>Created by &#169; Rabab Toor {data.site.siteMetadata.author}</h6>
        </footer>
        
    )
}
export default footer