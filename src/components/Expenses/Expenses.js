import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangerHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear ;
});

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangerHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList item={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
