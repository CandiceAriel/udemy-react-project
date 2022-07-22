import '../assets/scss/components/ExpenseItem.scss';

function ExpenseItem() {
    const expenseDate = new Date(2021, 3, 28);
    const expenseTitle = "Car Insurance";
    const expensePrice = 294.67;

    return (
        <div className= "c-expenseitem">
            <div>{expenseDate.toISOString()}</div>
            <div className = "c-expenseitem-description"> 
                <h2 className = "c-expenseitem-description-title">{expenseTitle}</h2>
                <div className = "c-expenseitem-description-price">${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;