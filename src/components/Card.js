import "../assets/scss/style.scss";

function Card(props) {
    const classes = "o-card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;