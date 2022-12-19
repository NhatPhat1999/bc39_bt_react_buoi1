import React, { Component } from "react";
import Item from "./Item"

class ListItem extends Component {
    render() {
        return (
            <div className="row gx-lg-5 my-5 ">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}

export default ListItem;