import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import {Button, Spinner} from "react-bootstrap";
import {connect} from "react-redux";


import ListCard from "./ListCard"
import * as Actions from "../Redux/Actions";
import * as ApiCalls from "./ApiCalls"


const mapStateToProps = (state) => {
    return {ReadingList: state.ReadingListStore.ReadingList}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReadingList: (object) => dispatch(Actions.GetReadingList(object))
    }
}

class ReadingList extends Component {
    componentDidMount=() =>{
        ApiCalls.GetReadingList().then(object => {
            this.props.getReadingList(object.data)
        })
    }

    render() {
        let list
        if (this.props.ReadingList.length < 1) {
            list = <Spinner animation={"border"}></Spinner>
        } else {
            list=this.props.ReadingList.map(bookInList => <ListCard key={bookInList._id} details={bookInList}/>)
        }
        return (
            <>
                <div>
                    <Image src={"https://images.moneycontrol.com/static-mcnews/2021/12/Books-list.jpg"}
                           style={{width: "100%", height: "30rem"}}/>
                    <Button href="/" variant="outline-danger" className="m-2"> Home</Button>
                </div>
                <div>
                    {list}
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadingList);