import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    .btmFormLine {
        display: flex;
        justify-content: space-between;
    }
    .btmInput {
        display: flex;
        gap: 0.5rem;
    }
    * {
        font-family: 'Poppins',sans-serif;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }
    input {
        height: 40px;
        background-color: rgba(255,255,255,0.07);
        border-radius: 3px;
        padding: 0 10px;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 300
    }
    input::placeholder {
        color: #e5e5e5;
    }
`;

const Select = styled.select`
    height: 40px;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
`;

const Button = styled.button`
    width: 6rem;
    padding: 10px;
    color: #ffffff;
    background-color: rgba(255,255,255,0.07);
    font-size: 14px;
    margin-top: 8px;
    font-weight: 300;
    border-radius: 3px;

    ${props => props.disabled ? '' : 
        'cursor: pointer; background-color: rgba(255,255,255,0.4); &:hover { background-color: rgb(8, 7, 16, 0.7) }'};
`;

export default function AddExpenseForm() {

    const [item, setItem] = useState({
        itemName: '',
        itemAmount: 0,
        itemType: '',
        itemDate: '',
        itemId: 0
    });
    const [isValidName, setIsValidName] = useState(false);
    const [isValidAmount, setIsValidAmount] = useState(false);
    const [isValidType, setIsValidType] = useState(false);
    const [isValidDate, setIsValidDate] = useState(false);

    const dispatch = useDispatch();

    const handleItemName = (e) => {
        setIsValidName(e.target.value.length >= 3);
        setItem({...item, itemName: e.target.value})
    };

    const handleItemAmount = (e) => {
        setIsValidAmount(/^\d*\.?\d*$/.test(e.target.value))
        setItem({...item, itemAmount: e.target.value})
    };

    const handleItemType = (e) => {
        setIsValidType(e.target.value === 'income' || 'expense')
        setItem({...item, itemType: e.target.value})
    };

    const handleItemDate = (e) => {
        const date = new Date(e.target.value);
        setIsValidDate(e.target.value !== '')
        setItem({
            ...item, 
            itemDate: date.toLocaleDateString("en-US", {timeZone: 'UTC'}),
            itemId: Math.random()
        })
    };

    const isButtonDisabled = isValidName && isValidAmount && isValidType && isValidDate;

    const handleAddBtn = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: item});
        item.itemType === 'income' ? 
            dispatch({ type: 'ADD_INCOME', payload: item.itemAmount }) : 
            dispatch({ type: 'ADD_EXPENSE', payload: item.itemAmount });
        clearInput1();
        clearInput2();
        clearMenuInput();
        clearDateInput();
        setItem({
            ...item,
            itemName: '',
            itemAmount: 0,
            itemType: '',
            itemDate: ''
        });
        setIsValidName(false);
        setIsValidAmount(false);
        setIsValidType(false);
        setIsValidDate(false);
        e.target.disabled = true;
    };

    const textInput1 = useRef();
    const textInput2 = useRef();
    const typeInput = useRef();
    const dateInput = useRef();
    const clearDateInput = () => { dateInput.current.value = '' };
    const clearInput1 = () => { textInput1.current.value = '' };
    const clearInput2 = () => { textInput2.current.value = '' };
    const clearMenuInput = () => { typeInput.current.value = 'default' };

  return (
        <Form className="form">
            <input 
                type='text' 
                name='itemName' 
                placeholder='Enter Expense/Income Name'
                ref={textInput1}
                onChange={handleItemName} 
            />
            <div className='btmFormLine'>
                <div className='btmInput'>
                    <input 
                        type='number' 
                        name='itemAmount' 
                        placeholder='Enter Amount'
                        ref={textInput2}
                        onChange={handleItemAmount} 
                    />
                    <Select 
                        defaultValue={'default'}
                        ref={typeInput} 
                        onChange={handleItemType} >
                            <option value='default' className='menuPlaceholder' disabled>Select One</option>
                            <option value='income'>Income</option>
                            <option value='expense'>Expense</option>
                    </Select>
                    <input 
                        ref={dateInput}
                        onChange={handleItemDate} 
                        type='date'
                    />
                </div>
                <div className="button">
                    <Button 
                        onClick={handleAddBtn}
                        disabled={!isButtonDisabled}>
                            Submit
                    </Button>
                </div>
            </div>
        </Form>
  )
}
