import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.items;

  const result = items.map((element) => {
    return (<ExpenseItem
      title={element.title}
      amount={element.amount}
      date={element.date}
    ></ExpenseItem>)
  })
  

  return (
    <Card className="expenses">
     {result}
    </Card>
  );
}

export default Expenses;