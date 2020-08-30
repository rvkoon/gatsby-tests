import React from "react"
import {graphql} from "gatsby"
import PostPreview from "../components/PostPreview.jsx"

import Layout from '../components/Layout.jsx'
import "../styles/style.scss"

const IndexPage = ({data}) => {

  return(
    <Layout>
        <h3 className="has-text-centered latest-posts">Latest posts</h3>
        <div className="columns is-multiline">
          {data.allMarkdownRemark.edges.map(({node}) => {
            if(node.frontmatter.published){
              return( 
                <PostPreview 
                  key={node.id}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  img={node.frontmatter.featuredImage.childImageSharp.fluid}
                  slug={node.fields.slug}
                  />
              )
            }
          })}
        </div>
    </Layout>
  )
}


export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            published
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`