import React from 'react';
import Expenses from "../components/expenses/Expenses"
import NewExpense from '../components/NewExpense/NewExpense';

function Body() {
    const expenses = [
        { 
          id: "ex1",
          title: "Car Insurance", 
          amount: 294.67, 
          date: new Date(2021, 3, 28)
        },
        { 
          id: "ex2",
          title: "Car Tuning", 
          amount: 294.67, 
          date: new Date(2021, 3, 28)
        },
        { 
          id: "ex3",
          title: "Car Tax", 
          amount: 294.67, 
          date: new Date(2021, 3, 28)
        },
      ];

    return (
        <div>
            <NewExpense />
            <Expenses items={expenses} />
        </div>
    );
}

export default Body;