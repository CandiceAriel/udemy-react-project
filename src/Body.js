import Expenses from "./view/Expenses"

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
            <h2>Let's get started!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default Body;