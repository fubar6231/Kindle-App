import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";

class HomeNavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <img
                            alt=""
                            src="https://www.thestorygraph.com/assets/logo-white-15cb57f7a4673cdf300bdcb013bb5330457e5551ce7b0021b5bd5b1aa4f87d58.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}Kindle Web
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Reading List</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default HomeNavBar;