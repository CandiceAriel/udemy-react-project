import React from 'react';

import "../../assets/scss/style.scss";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="c-expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        </Card>
    );
}

export default Expenses;