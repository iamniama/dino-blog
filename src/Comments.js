

function Comments(props) {
    return (
        <div className="cmnt-block wrapper">
            <span className="cmnt-header">Comments: <br/></span>
            <ul>
                {props.comments.map((comment) => <li> {comment}</li>)}
            </ul>
        </div>

    )
}

export default Comments;