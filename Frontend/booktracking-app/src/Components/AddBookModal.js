import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

function AddBookModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="Title"
                                placeholder="Harry Potter and the Goblet of Fire"
                                onChange={e=>props.handleInput(e)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="Author"
                                onChange={e=>props.handleInput(e)}
                                placeholder="J. K. Rowling"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                name="Genre"
                                onChange={e=>props.handleInput(e)}
                                placeholder="Fantasy"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pages</Form.Label>
                            <Form.Control
                                type="text"
                                name="Pages"
                                onChange={e=>props.handleInput(e)}
                                placeholder="636"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control
                                type="text"
                                name="Publisher"
                                onChange={e=>props.handleInput(e)}
                                placeholder="Bloomsbury"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleShow}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={()=>props.handleCreate()} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddBookModal;