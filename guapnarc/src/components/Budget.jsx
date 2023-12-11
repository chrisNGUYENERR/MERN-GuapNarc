import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    .budget {
        display: flex;
        justify-content: space-between;
        font-size: 48px;
        border-bottom: 2px dashed black;
    }
`;

function Budget(props) {

    const budget = props.expenseList.budget;

  return (
    <Container>
        <div className="budget">
            Budget:
            <span>${ budget }</span>
        </div>
    </Container>
  )
}


const mapStateToProps = (state) => {
    const expenseList = state;
    return { expenseList };
};


export default connect(mapStateToProps, null)(Budget)