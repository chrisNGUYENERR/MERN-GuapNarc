import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


function ExpenseList(props) {

    const expenseList = props.expenseList.itemList;

  return (
    <Container>
        {expenseList.map((expense, index) => {
            return <ExpenseItem key={index} name={expense.itemName} amount={expense.itemAmount} id={expense.itemId} type={expense.itemType} date={expense.itemDate} />
        })}
    </Container>
  )
};

const mapStateToProps = (state) => {
    const expenseList = state;
    return { expenseList };
};


export default connect(mapStateToProps, null)(ExpenseList)