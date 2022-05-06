import "./Card.css"
import React from "react";

function Card(props) {
    var allclass = "card "+ props.className;                //so here we added 2 css classes ("card") and (props.className = "expense-item")
    return <div className={allclass}>{props.children}</div>   

    //{props.children} needed as props don't work same as html tags
}

export default Card;