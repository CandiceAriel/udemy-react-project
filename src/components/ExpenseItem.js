//Import Style
import '../assets/scss/style.scss';
import Card from './Card';

//Import Components
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <Card className= "c-expense-item">
            <ExpenseDate date= {props.date}/>
            <div className = "c-expense-item__description"> 
                <h2 className = "c-expense-item__description__title">{props.title}</h2>
                <div className = "c-expense-item__description__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;