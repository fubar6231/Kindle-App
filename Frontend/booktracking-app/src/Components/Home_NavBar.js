import React, {Component} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import * as ApiCalls from "./ApiCalls";
import AddBookModal from "./AddBookModal";
import * as Actions from "../Redux/Actions";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: (object) => {
            dispatch(Actions.CreateBook(object))
        }
    }
}


class HomeNavBar extends Component {
    state = {
        show: false,
        newBook: {
            Title: "",
            Author: "",
            Genre: "",
            Pages: "",
            Publisher: ""
        },
    }

    handleShow = () => {
        this.setState({show: !this.state.show})
    }

    handleInput = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        this.setState({newBook: {...this.state.newBook, [name]: value}})
    }

    handleCreateBook = () => {
        ApiCalls.CreateBook(this.state.newBook).then(res => {
            this.props.createBook(res.data)
            this.handleShow()
        }).catch(err => console.log(err))
    }

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
                            <Button variant="dark" onClick={this.handleShow}>Add Book</Button>
                        </Nav>
                        <AddBookModal show={this.state.show}
                                      handleShow={this.handleShow}
                                      handleInput={this.handleInput}
                                      handleCreate={this.handleCreateBook}
                        />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                value={this.props.searchInput}
                                onChange={e => this.props.handleSearch(e.target.value)}
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(HomeNavBar);