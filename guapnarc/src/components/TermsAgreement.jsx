import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    .closeBtn {
        display: flex;
        justify-content: flex-end;
        height: 2rem;
        position: sticky;
        top: 0;
        z-index: 9999;
        background-color: white;
        padding: 0.5rem;
    }
    .title {
        display: flex;
        margin-top: 1rem;
        font-size: 18px;
        font-weight: 600;
        justify-content: center;
    }

    .agreement {
        padding: 1rem;
    }
    button {
        cursor: pointer;
    }
`;

export default function TermsAgreement(props) {
  return (
    <Container>
        <div className="modal">
            <div className='closeBtn'>
                <button onClick={props.closeModal}>Close</button>
            </div>
            <div className="title">
                Terms and Agreement:
            </div>
            <div className='agreement'>
                <div>Welcome to GuapNarc. By using our Application, you agree to comply with and be bound by the following terms:</div>
                <p>1. <b>Use of the Application: </b>
                You are granted a limited, non-exclusive, non-transferable license for personal, non-commercial use.
                Modifications, sublicensing, or reverse engineering of the Application are prohibited.</p>
                <p>2. <b>User Responsibilities: </b>
                Ensure accuracy of information provided.
                Maintain the confidentiality of account credentials.</p>
                <p>3. <b>Limitation of Liability: </b>
                We are not liable for any direct, indirect, or consequential damages arising from the use of the Application.</p>
                <p>4. <b>Termination: </b>
                We reserve the right to terminate or suspend your account at our discretion, without notice, for any reason.</p>
                <p>5. <b>Changes to Terms: </b>
                We may update these terms without notice. Continued use constitutes acceptance of changes.</p>
                <p>6. <b>Governing Law: </b>
                This Agreement is governed by the laws of Your Country.
                By using the Application, you agree to these terms. For questions, contact us at fakeemail@email.com.</p>

                <p>Last Revision: December 3, 2023</p>

                <div>The Best Company, Inc.</div>
                <div>1234 Fake Street</div>
                <div>Fake City, Fake State 12345</div>
                <div>(972) 123-4567</div>
            </div>
        </div> 
    </Container>
  )
};
