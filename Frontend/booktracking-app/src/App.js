import React, {Component} from 'react';
import {connect} from "react-redux";
import {Spinner} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import BookCard from "./Components/BookCard";
import * as Actions from "./Redux/Actions"
import * as ApiCalls from "./Components/ApiCalls"
import HomeNavBar from "./Components/Home_NavBar";
import ReadingList from "./Components/ReadingList";

const setBooksStore = require("./Components/SetStore")


const mapStateToProps = (state) => {
    return {Books: state.BooksStore.Books}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (object) => dispatch(Actions.GetBooks(object)),
        deleteBook: (object) => {
            dispatch(Actions.DeleteBook(object))
        }
    }
}

class App extends Component {
    state = {
        searchInput: ""
    }


    handleDeleteBook = (bookId) => {
        ApiCalls.DeleteBook(bookId).then(res => {
            const filterBooks = this.props.Books.filter(x => x._id !== bookId)
            this.props.deleteBook(filterBooks)
        })
    }


    handleSearchInput = (input) => {
        this.setState({searchInput: input})
    }

    componentDidMount() {
        setBooksStore().then(object => {
            this.props.getBooks(object)
        })
        // ApiCalls.GetBooks().then(object => {
        //     this.props.getBooks(object.data)
        // }).catch(error => console.error(error))
    }

    componentWillUnmount() {
        let object=[]
        this.props.getBooks(object)
    }


    render() {
        let bookElement
        console.log(this.props.Books.length)
        if (this.props.Books.length < 1) {
            bookElement = <Spinner animation={"border"}></Spinner>
        } else {
            bookElement = this.props.Books.filter(Book => {
                if (Book.Title.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
                    return Book
                } else if (this.state.searchInput === "") {
                    return Book
                }
            }).map(oneBook => {
                return (<BookCard key={oneBook._id} BookDetails={oneBook} handleDelete={this.handleDeleteBook}/>)
            })
        }


        return (
            <Router>
                <Routes>
                    <Route path="/" element={<>
                        <HomeNavBar searchInput={this.state.searchInput} handleSearch={this.handleSearchInput}/>
                        <br/>
                        <br/>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                            {bookElement}
                        </div>
                    </>}>
                    </Route>
                    <Route path="/readingList" element={<ReadingList/>}></Route>
                </Routes>
            </Router>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
