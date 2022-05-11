import React from "react";
import "../stylesheets/ClearButton.css"

const ClearButton = (props) => {
    return (
        <div className="clear-Button" onClick={() => {props.handleClick()}}>{props.children}</div>
    )
}

export default ClearButton;