//Import Style
import '../assets/scss/style.scss';

//Import Components
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className= "c-expense-item">
            <ExpenseDate date= {props.date}/>
            <div className = "c-expense-item-description"> 
                <h2 className = "c-expense-item-description_title">{props.title}</h2>
                <div className = "c-expense-item-description_price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;