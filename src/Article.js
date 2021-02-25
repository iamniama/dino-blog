
import Comments from "./Comments";
import { Modal, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function Article(props) {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false)
    const [postData, setPostData] = useState(props.body)
    const [tempData, setTempData] = useState(postData)
    const handleClose = () => {
        setShow(false);}
    const handleShow = () => setShow(true);
    const handleChange = (e) => setTempData(e.target.value)
    const handleSubmit = (e) => {
        setPostData(tempData)
        handleClose(e)
    }
    const post = {
        title: props.title,
        author: props.author,
        body: postData,
        comments: props.comments
    }

    return (
        <div className="wrapper">
            <h1 className="ar-title">"{post.title}" </h1>
            <h3 className="ar-author">by: {post.author}</h3>
            <div className="ar-body">
                <p>{post.body}</p>
            </div>
            <Button variant="outline-dark" size="sm" onClick={handleShow}>
                Edit Post
            </Button>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Heading Text</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Update Post: </Form.Label>
                        <Form.Control as="textarea" onChange={handleChange} value={tempData} placeholder="name input"/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>

                </Modal.Footer>

            </Modal>
            <Comments comments={post.comments}/>



        </div>
    )
}


export default Article;