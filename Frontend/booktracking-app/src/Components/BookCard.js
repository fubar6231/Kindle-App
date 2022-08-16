import React, {Component} from 'react';
import {Card, ListGroup} from "react-bootstrap";

class BookCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2018%2F09%2Fgettyimages-183822187-1.jpg" />
                <Card.Body>
                    <Card.Title>{this.props.BookDetails.Title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Author : {this.props.BookDetails.Author}</ListGroup.Item>
                    <ListGroup.Item>Genre : {this.props.BookDetails.Genre}</ListGroup.Item>
                    <ListGroup.Item>Pages : {this.props.BookDetails.Pages}</ListGroup.Item>
                    <ListGroup.Item>Publisher : {this.props.BookDetails.Publisher}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BookCard;