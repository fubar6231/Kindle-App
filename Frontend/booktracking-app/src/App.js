import HomeNavBar from "./Components/Home_NavBar";
import {Button} from "react-bootstrap";

import React, {Component} from 'react';
import BookCard from "./Components/BookCard";
import {connect} from "react-redux";
import * as Actions from "./Redux/Actions"
import * as ApiCalls from "./Components/ApiCalls"

const mapStateToProps = (state) => {
    return {Books: state.Books}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (object) => dispatch(Actions.GetBooks(object))
    }
}

class App extends Component {

    componentDidMount() {
        ApiCalls.GetBooks().then(object => {
            this.props.getBooks(object.data)
        }).catch(error => console.error(error))
    }

    render() {

        let bookElement = this.props.Books.map(oneBook => {
            return (<BookCard BookDetails={oneBook}/>)
        })
        return (
            <div>
                <HomeNavBar/>
                <br/>
                <Button variant="dark">Add Book</Button>
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
