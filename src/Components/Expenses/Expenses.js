import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("expenses.js");
    console.log(selectedYear);
  };
  
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangeHandler}
          selected={filterdYear}
        />
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
