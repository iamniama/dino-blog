import Comments from "./Comments";

function Article(props) {
    return (
        <div>
            <h1 className="ar-title">"{props.title}" </h1>
            <h3 className="ar-title">by: {props.author}</h3>
            <div className="ar-body">
                <p>{props.body}</p>
            </div>
            <Comments comments={props.comments}/>
        </div>
    )
}


export default Article;