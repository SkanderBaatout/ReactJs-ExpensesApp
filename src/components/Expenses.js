import ExpenseItem from "./ExpenseItem";
function Expenses (props) {
    return ( 
        <div>
             <ExpenseItem
       title={props.expenses[0].titre}
       prix={props.expenses[0].prix}
        date={props.expenses[0].date}
        ></ExpenseItem>
         <ExpenseItem
       title={props.expenses[1].titre}
       prix={props.expenses[1].prix}
        date={props.expenses[1].date}
        ></ExpenseItem>
         <ExpenseItem
       title={props.expenses[2].titre}
       prix={props.expenses[2].prix}
        date={props.expenses[2].date}
        ></ExpenseItem>
         <ExpenseItem
       title={props.expenses[3].titre}
       prix={props.expenses[3].prix}
        date={props.expenses[3].date}
        ></ExpenseItem>
        </div>
     );
}

export default Expenses ;