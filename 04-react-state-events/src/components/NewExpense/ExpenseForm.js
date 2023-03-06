import React,{useState} from 'react'

import '../NewExpense/ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setenteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) =>{
        setenteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        // {title: 'Test', amount: '120', date: Fri Dec 23 2022 04:00:00 GMT+0400 (Azerbaijan Standard Time)}

        props.onSaveExpenseData(expenseData)


        setEnteredTitle('');
        setEnteredAmount('');
        setenteredDate('');

        // Bu 3 funksiyani yazmagla biz formu submit etdikden sonra gonderdiklerimizin inputdan silinmesi ucun onu bos stringe beraber edirik

    }

  return (
    // In forms we use onSubmit handler instead of button onClick
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"  value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm