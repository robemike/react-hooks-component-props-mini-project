import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
    const articleArr = props.posts.map((post) => (<Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
    />))
    return (
        <div>
            <main>
                {articleArr}
            </main>
        </div>
    )
}

export default ArticleList
