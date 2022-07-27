import React, {useState} from 'react';

//Import Style
import "../../assets/scss/style.scss";
import Card from '../Card';

//Import Components
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <Card className= "c-expense-item">
            <ExpenseDate date= {props.date}/>
            <div className = "c-expense-item-description"> 
                <h2 className = "c-expense-item-description__title">{title}</h2>
                <div className = "c-expense-item-description__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;