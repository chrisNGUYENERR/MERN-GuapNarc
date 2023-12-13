import React from 'react';
import styled from 'styled-components';
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from 'react-redux';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    .item {
        display: flex;
        flex-direction: row;
        height: 2rem;
        align-items: center;
        background-color: rgba(255,255,255,0.07);
        padding: 0 0.5rem;
        border-radius: 3px;
        font-weight: 100;
        margin-bottom: 0.5rem;
        .name {
            width: 60%;
        }
        .date {
            width: 20%;
        }
        .amount {
            display: flex;
            justify-content: flex-end;
            width: 20%;
        }
    }
    svg {
        margin-left: 0.5rem;
        cursor: pointer;
    }
`;

export default function ExpenseItem(props) {

    const dispatch = useDispatch();

    const deleteItem = (e) => {
        e.preventDefault();
        dispatch({ type: 'DELETE_ITEM', payload: props.id })
        props.type === 'expense' ? 
            dispatch({ type: 'ADD_INCOME', payload: props.amount }) :
            dispatch({ type: 'ADD_EXPENSE', payload: props.amount })
    };

  return (
    <Container>
        <div className='item'>
            <span className='name'>
                { props.name }
            </span>
            <span className='date'>
                { props.date }
            </span>
            <span className='amount'>
                { props.type === 'income' ? '$+' : '$-' }
                { props.amount }
                <CiCircleRemove className='deleteBtn' onClick={deleteItem} />
            </span>
        </div>
    </Container>
  )
}
