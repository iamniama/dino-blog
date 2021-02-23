function Article(props) {
    return(
        <div>
            <h1 className="ar-title">"{props.title}" </h1>
            <h3 className="ar-title">by: {props.author}</h3>
            <div className="ar-body">
                <p>{props.body}</p>
            </div>
            <div className="cmnt-block">
                Comments: <br />
                {props.comments.map((comment)=> <p>{comment}</p>)}
            </div>
        </div>
    )
}


export default Article;