import React from 'react'
import {Link} from 'react-router-dom'

const PostCard = (props) => {
    const {post} = props;

    return (
        <article>
            <Link to= {`/blog/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
        </article>
    )
}

export default PostCard