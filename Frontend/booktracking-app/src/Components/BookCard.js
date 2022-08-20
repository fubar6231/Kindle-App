import React, {Component} from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";

import * as ApiCalls from "./ApiCalls"
import {connect} from "react-redux";
import * as Actions from "../Redux/Actions";

const mapStateToProps = (state) => {
    return {Books: state.BooksStore.Books}
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddToReadingList: (object) => {
            dispatch(Actions.AddToReadingList(object))
        },
        updateBooksStatus: (object) => dispatch(Actions.updateBooksStatus(object))
    }
}

class BookCard extends Component {

    handleBookToList=()=>{
        if(!this.props.BookDetails.Reading){
            let BookToBeRead = this.props.BookDetails
            BookToBeRead.Reading= true
            ApiCalls.AddToReadingList({Read:0,bookDetails:BookToBeRead}).then(()=>{
               let updatedBookStatus= this.props.Books.map(object=>{
                    if(object._id===this.props.BookDetails._id){
                        object.Reading=true
                        return object
                    }else {
                        return object
                    }
                })
                this.props.updateBooksStatus(updatedBookStatus)
            })
        }
    }

    render() {
        return (
            <Card className="m-2" border="dark"  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2018%2F09%2Fgettyimages-183822187-1.jpg" />
                <Card.Body>
                    <Card.Title>{this.props.BookDetails.Title.split(",").reverse().join(" ")}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Author : {this.props.BookDetails.Author.split(",").reverse().join(" ")}</ListGroup.Item>
                    <ListGroup.Item>Genre : {this.props.BookDetails.Genre}</ListGroup.Item>
                    <ListGroup.Item>Pages : {this.props.BookDetails.Pages}</ListGroup.Item>
                    <ListGroup.Item>Publisher : {this.props.BookDetails.Publisher}</ListGroup.Item>
                </ListGroup>
                <Card.Body style={{ display:"flex", justifyContent:"space-between" }}>
                    <Button variant="danger" onClick={()=>this.props.handleDelete(this.props.BookDetails._id)}>Remove</Button>
                    <Button variant="dark" onClick={()=>{this.handleBookToList()}} >{this.props.BookDetails.Reading ? "Reading..." : "Read"}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);