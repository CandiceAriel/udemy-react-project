import React from "react";

import "../../assets/scss/style.scss"
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return <div className="c-new-expense">
        <ExpenseForm />
    </div>
}

export default NewExpense;