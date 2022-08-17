import {Button} from "react-bootstrap";
import React, {Component} from 'react';
import {connect} from "react-redux";

import BookCard from "./Components/BookCard";
import * as Actions from "./Redux/Actions"
import * as ApiCalls from "./Components/ApiCalls"
import HomeNavBar from "./Components/Home_NavBar";
import AddBookModal from "./Components/AddBookModal";

const mapStateToProps = (state) => {
    return {Books: state.Books}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (object) => dispatch(Actions.GetBooks(object)),
        createBook:(object)=>{dispatch(Actions.CreateBooks(object))}
    }
}

class App extends Component {
    state = {
        show: false,
        newBook: {
            Title: "",
            Author: "",
            Genre: "",
            Pages: "",
            Publisher: ""},
    }

    handleShow = () => {
        this.setState({show: !this.state.show})
    }


    handleInput = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        this.setState({newBook: {...this.state.newBook,[name]:value}})
    }

    handleCreateBook=()=>{
        ApiCalls.CreateBooks(this.state.newBook).then(res=>{
            this.props.createBook(res.data)
            this.handleShow()
        }).catch(err=>console.log(err))
    }

    componentDidMount() {
        ApiCalls.GetBooks().then(object => {
            this.props.getBooks(object.data)
        }).catch(error => console.error(error))
    }

    render() {

        let bookElement = this.props.Books.map(oneBook => {
            return (<BookCard key={oneBook._id} BookDetails={oneBook}/>)
        })
        return (
            <div>
                <HomeNavBar/>
                <br/>
                <Button variant="dark" onClick={this.handleShow}>Add Book</Button>
                <AddBookModal show={this.state.show}
                              handleShow={this.handleShow}
                              handleInput={this.handleInput}
                              handleCreate={this.handleCreateBook}
                />
                <br/>
                <br/>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    {bookElement}
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
