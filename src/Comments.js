import Comment from './Comment'

function Comments(props) {
    return (
        <div className="cmnt-block">
            Comments: <br/>
            <ul>
                {props.comments.map((comment) => <Comment comment={comment}/>)}
            </ul>
        </div>

    )
}

export default Comments;