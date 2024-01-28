import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaUser } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: white;
    background-color: #6161616c;
    height: 3rem;
    .logo {
        display: flex;
        gap: 0.5rem;
    }
    .userInfo {
        display: flex;
        gap: 0.5rem;
    }
    button {
        background-color: transparent;
        font-size: inherit;
        cursor: pointer;

        &:hover {
            color: #055fb8;
        }
    }
    .menuOption {
        background-color: #6161616c;
        position: absolute;
        right: 34px;
        top: 56px;
        border-radius: 0 0 10px 10px;
    }
    .menuItems {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0.5rem 2rem;
        padding: 0;
        gap: 0.5rem;
    }
    a, li {
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #055fb8;
        }
    }
`;

function Navbar(props) {

    const navigate = useNavigate();

    const { firstName, lastName } = props.stateData;
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOutBtn = (e) => {
        e.preventDefault();
        try {
            signOut(firebaseAuth)
            .then(() => {
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        };
    };

  return (
    <Container>
        <div className="logo">
            <FaSackDollar />
            G u a p N a r c
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
            <FaUser /> {firstName} {lastName}
        </button>
        {isOpen && (
            <div className='menuOption'>
                <ul className='menuItems'>
                    <a href='/dashboard'>Dashboard</a>
                    <li onClick={handleSignOutBtn}>Sign Out</li>
                </ul>
            </div>
        )}
        {/* <div className="userInfo">
            <FaUser />
            {firstName} {lastName}
        </div> */}
    </Container>
  )
}

const mapStatesToProps = (state) => {
    const stateData = state;
    return { stateData };
};

export default connect(mapStatesToProps, null)(Navbar);