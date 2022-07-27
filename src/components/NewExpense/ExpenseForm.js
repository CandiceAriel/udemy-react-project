import React from "react";

import "../../assets/scss/style.scss"

const ExpenseForm = () => {
    return <form>
        <div className="c-new-expense__controls">
            <div className="c-new-expense__control">
                <label className="c-new-expense__control_label-text">Title</label>
                <input className="c-new-expense__control_input" type="text" />
            </div>
            <div className="c-new-expense__control">
                <label className="c-new-expense__control_label-text">Amount</label>
                <input className="c-new-expense__control_input" type="number" min="0.01" step="0.01"/>
            </div>
            <div className="c-new-expense__control">
                <label className="c-new-expense__control_label-text">Date</label>
                <input className="c-new-expense__control_input" type="date" min="2021-01-01" max="2023-12-31"/>
            </div>
        </div>
        <div className="c-new-expense__action">
            <button className="c-new-expense__action_button" type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;