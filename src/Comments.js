

function Comments(props) {
    return (
        <div className="cmnt-block">
            Comments: <br/>
            <ul>
                {props.comments.map((comment) => <li>{comment}</li>)}
            </ul>
        </div>

    )
}

export default Comments;