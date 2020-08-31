import React, {Fragment} from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import {Link} from "gatsby"

const Post = ({data}) => {
    console.log(data)
    const post = data.post
    const allPosts = data.allPosts.edges
    return(
        <Layout>
            <div className="post-template columns">
                <div className="column is-8">
                    <div className="post-header">
                        <h1>{post.frontmatter.title}</h1>
                        <p>Written by {post.frontmatter.author} on {post.frontmatter.date}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
                <div className="column is-offset-1 is-3 post-aside">
                    <h4>Read other articles</h4>
                    {allPosts.map(({node}) => {
                        if(node.frontmatter.published){
                            return(
                                <Fragment>
                                    <Link key={node.id} to={node.fields.slug} className="post-aside-links">
                                        {node.frontmatter.title}
                                    </Link>
                                    <br/>
                                </Fragment>
                            )
                        }
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
      post:markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
      }
    }
    allPosts:allMarkdownRemark(
        limit: 10
        filter: { fields: { slug: { ne: $slug } } }
        ){
        edges{
            node{
                id
                frontmatter{
                    title
                    published
                }
                fields{
                    slug
                }
            }
        }
    }
  }
`

export default Post