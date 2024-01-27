import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaUser } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

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
`;
function Navbar(props) {

    const { firstName, lastName } = props.stateData;

  return (
    <Container>
        <div className="logo">
            <FaSackDollar />
            G u a p N a r c
        </div>
        <div className="userInfo">
            <FaUser />
            {firstName} {lastName}
        </div>
    </Container>
  )
}

const mapStatesToProps = (state) => {
    const stateData = state;
    return { stateData };
};

export default connect(mapStatesToProps, null)(Navbar);