import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostPreview = ({
    title,
    date,
    img,
    slug
}) => {
    return(
        <div className="column is-4 post-preview">
              <Img fluid={img} />
              <Link to={slug}>
                <h4 className="green-title">{title}</h4>
              </Link>
              <p>{date}</p>
        </div>
    )
}

export default PostPreview