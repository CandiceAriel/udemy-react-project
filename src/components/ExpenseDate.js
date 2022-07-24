//RENDER DATE OF EXPENSE
import '../assets/scss/style.scss';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: "long"});
    const date = props.date.toLocaleString('en-US', {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className= "c-expense-date">
            <div className= "c-expense-date__month">{month}</div>
            <div className= "c-expense-date__year">{year}</div>
            <div className= "c-expense-date__day">{date}</div>
        </div>
    );
}

export default ExpenseDate;