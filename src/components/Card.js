import React from 'react';
import "../assets/scss/style.scss";

const Card = (props) => {
    const classes = "o-card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;