import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import {Button} from "react-bootstrap";

class ReadingList extends Component {
    render() {
        return (
            <div>
                <Image src={"https://images.moneycontrol.com/static-mcnews/2021/12/Books-list.jpg"} style={{width:"100%",height:"30rem"}}/>
                <Button href="/" variant="outline-danger" className="m-2"> Home</Button>
            </div>
        );
    }
}

export default ReadingList;