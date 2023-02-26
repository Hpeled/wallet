import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (data) => {
    const [title, setTitle] = useState(data.title)

    const clickheader = () => {
        setTitle('Update');
         console.log(title);
        };


    return (
        <li>
<Card className='expense-item'>
    <ExpenseDate date= {data.date}/>
    <div className='expense-item__description'>
        <h2> {data.title} </h2>
        <div className='expense-item__price'>
           ${data.amount}</div>
        </div>
        <button  onClick={clickheader}>Change Title</button>
    </Card>
    </li>
    );

};
export default ExpenseItem;