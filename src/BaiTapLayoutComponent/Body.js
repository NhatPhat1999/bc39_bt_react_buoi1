import React, { Component } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem"

class Body extends Component {
    render() {
        return (
        <div className="Body py-5">
            <div className="container">
                <Banner/>
                <ListItem/>
            </div>
        </div>)
    }
}

export default Body;