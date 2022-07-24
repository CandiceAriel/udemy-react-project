import ExpenseDate from './ExpenseDate';
import '../assets/scss/components/ExpenseItem.scss';

function ExpenseItem(props) {

    return (
        <div className= "c-expenseitem">
            <ExpenseDate date= {props.date}/>
            <div className = "c-expenseitem-description"> 
                <h2 className = "c-expenseitem-description-title">{props.title}</h2>
                <div className = "c-expenseitem-description-price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;