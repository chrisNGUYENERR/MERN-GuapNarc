import React from 'react';
import styled from 'styled-components';
import ExpenseList from '../components/ExpenseList';
import Budget from '../components/Budget';
import AddExpenseForm from '../components/AddExpenseForm';
import Navbar from '../components/Navbar';

const Container = styled.div`
    background-color: #080710;
    * {
        font-family: 'Poppins',sans-serif;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }
    .expenseModule {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .background {
        width: 430px;
        height: 520px;
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }
    .background .shape {
        height: 200px;
        width: 200px;
        position: absolute;
        border-radius: 50%;
    }
    .shape:first-child {
        background: linear-gradient(
            #1845ad,
            #23a2f6
        );
        left: -200px;
        top: -200px;
    }
    .shape:last-child {
        background: linear-gradient(
            to right,
            #ff512f,
            #f09819
        );
        right: -180px;
        bottom: -280px;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 9999;
        height: 800px;
        width: 600px;
        background-color: rgba(255,255,255,0.13);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        border: 2px solid rgba(255,255,255,0.1);
        box-shadow: 0 0 40px rgba(8,7,16,0.6);
        padding: 1rem;
    }
`;

export default function ExpenseTracker() {
  return (
    <Container>
        <Navbar />
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <div className="expenseModule">
            <div className='content'>
                <Budget />
                <ExpenseList />
                <AddExpenseForm />
            </div>
        </div>
    </Container>
  )
}
