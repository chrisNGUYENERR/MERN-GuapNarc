import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    
`;

function Dashboard(props) {
    
    const userState = props;
    console.log('dashboard:', userState)

    return (
        <Container>
            User dashboard
        </Container>
    )
}

const mapStatetoProps = (state) => {
    const stateData = state
    return { stateData };
};

export default connect(mapStatetoProps, null)(Dashboard);