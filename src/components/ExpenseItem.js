import "./ExpenseItem.css"
import "./ExpenseDate.js"
import ExpenseDate from "./ExpenseDate.js";
function  ExpenseItem(props) {
  
    const expenseDate= new Date(2022,1,14);
    const expensTitre="Education";
    const expensPrix=5500;
    return (
        <div className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2> {props.title}</h2>
                <div className="expense-item__price"> $ {props.prix}</div>
            </div>
        </div>
     );
}


export default ExpenseItem;