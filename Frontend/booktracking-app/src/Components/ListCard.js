import React, {Component} from 'react';
import {Button, Card, Form, InputGroup, ProgressBar} from "react-bootstrap";

import * as Actions from "../Redux/Actions";
import * as ApiCalls from "./ApiCalls"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {ReadingList: state.ReadingListStore.ReadingList}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReadingList: (object) => dispatch(Actions.GetReadingList(object)),
        updateReadPages: (object) => {
            dispatch(Actions.updateReadPages(object))
        }
    }
}


class ListCard extends Component {
    state = {readPages: 0}

    handleCompletedBook = (id) => {
        ApiCalls.RemoveFromReadingList(id).then(() => {
            const filterBooks = this.props.ReadingList.filter(x => x._id !== id)
            this.props.getReadingList(filterBooks)
        })
    }

    handlePagesRead = (id, pagesReadToday) => {
        const Pages = this.props.details.Read + parseInt(pagesReadToday, 10)
        ApiCalls.UpdateBookPages(id, {Read: Pages}).then(() => {
            const updatedList = this.props.ReadingList.filter(Book => {
                if (Book._id === id) {
                    Book.Read = Pages
                    return Book
                } else {
                    return Book
                }
            })
            this.props.updateReadPages(updatedList)
            this.setState({readPages: 0})
        })
    }


    render() {
        let pagesRead = this.props.details.Read
        let total = this.props.details.bookDetails.Pages
        let progress = Math.floor((pagesRead / total) * 100)
        return (
            <>
                <Card border="dark" className="m-5">

                    <Card.Header>{this.props.details.bookDetails.Title.split(",").reverse().join(" ")}</Card.Header>
                    <div>
                        <Button variant="success" className={"m-2"} onClick={() => {
                            this.handleCompletedBook(this.props.details._id)
                        }}>Completed</Button>
                    </div>

                    <Card.Body>
                        <Card.Text>Author: {this.props.details.bookDetails.Author.split(",").reverse().join(" ")}</Card.Text>
                        <Card.Text>Genre: {this.props.details.bookDetails.Genre}</Card.Text>
                        <Card.Text>Pages: {this.props.details.bookDetails.Pages}</Card.Text>
                        <Card.Text>Publisher: {this.props.details.bookDetails.Publisher}</Card.Text>
                        <Card.Text>Pages Read: {this.props.details.Read}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <InputGroup className="mb-3" style={{width: "23rem"}}>
                            <InputGroup.Text>Pages Read today :</InputGroup.Text>
                            <Form.Control
                                value={this.state.readPages}
                                onChange={e => this.setState({readPages: e.target.value})}/>
                            <InputGroup.Text>/ {this.props.details.bookDetails.Pages}</InputGroup.Text>
                            <Button variant="warning"
                                    onClick={() => this.handlePagesRead(this.props.details._id, this.state.readPages)}>Update</Button>
                        </InputGroup>
                        <ProgressBar now={progress} label={`${progress}%`}/>
                    </Card.Body>
                </Card>
                <br/>

            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);