import React, {Component} from 'react';
import {connect} from "react-redux";

import BookCard from "./Components/BookCard";
import * as Actions from "./Redux/Actions"
import * as ApiCalls from "./Components/ApiCalls"
import HomeNavBar from "./Components/Home_NavBar";

const mapStateToProps = (state) => {
    return {Books: state.Books}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (object) => dispatch(Actions.GetBooks(object)),
        createBook: (object) => {
            dispatch(Actions.CreateBook(object))
        },
        deleteBook: (object) => {
            dispatch(Actions.DeleteBook(object))
        }
    }
}

class App extends Component {
    state = {
        show: false,
        searchInput: "",
        newBook: {
            Title: "",
            Author: "",
            Genre: "",
            Pages: "",
            Publisher: ""
        },
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
        ApiCalls.GetBooks().then(object => {
            this.props.getBooks(object.data)
        }).catch(error => console.error(error))
    }

    render() {
        let bookElement
        if (this.state.searchInput.length > 0) {
            bookElement = this.props.Books.filter(Book => {
                if (Book.Title.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
                    return Book
                }
            }).map(oneBook => {
                return (<BookCard key={oneBook._id} BookDetails={oneBook} handleDelete={this.handleDeleteBook}/>)
            })
        } else {
            bookElement = this.props.Books.map(oneBook => {
                return (<BookCard key={oneBook._id} BookDetails={oneBook} handleDelete={this.handleDeleteBook}/>)
            })
        }


        return (
            <div>
                <HomeNavBar searchInput={this.state.searchInput} handleSearch={this.handleSearchInput}/>
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
