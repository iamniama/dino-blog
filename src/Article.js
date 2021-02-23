import Comments from "./Comments";


function Article(props) {
    const post = {
        title: props.title,
        author: props.author,
        body: props.body,
        comments: props.comments
    }
    return (
        <div>
            <h1 className="ar-title">"{post.title}" </h1>
            <h3 className="ar-title">by: {post.author}</h3>
            <div className="ar-body">
                <p>{post.body}</p>
            </div>
            <Comments comments={post.comments}/>
        </div>
    )
}


export default Article;