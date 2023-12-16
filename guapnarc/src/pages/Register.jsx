import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaGoogle, FaRegEye, FaRegEyeSlash, FaCheck } from 'react-icons/fa';
import Modal from 'react-modal';
import TermsAgreement from '../components/TermsAgreement';
import '../styles.css';

const Container = styled.div`
    height: 100vh;
    background-color: #080710;
    .background{
        width: 430px;
        height: 520px;
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }
    .background .shape{
        height: 200px;
        width: 200px;
        position: absolute;
        border-radius: 50%;
    }
    .shape:first-child{
        background: linear-gradient(
            #1845ad,
            #23a2f6
        );
        left: -100px;
        top: -100px;
    }
    .shape:last-child{
        background: linear-gradient(
            to right,
            #ff512f,
            #f09819
        );
        right: -80px;
        bottom: -120px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 520px;
    width: 400px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    * {
        font-family: 'Poppins',sans-serif;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }
    .title {
        font-size: 32px;
        text-align: center;
        margin-bottom: 1rem;
    }
    input {
        display: block;
        height: 50px;
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
    .firstName {
        position: relative;
    }
    .checkFirstName {
        position: absolute;
        left: 400px;
        top: 125px;
    }
    .lastName {
        position: relative;
    }
    .checkLastName {
        position: absolute;
        left: 400px;
        top: 173px;
    }
    .email {
        position: relative;
    }
    .checkEmail {
        position: absolute;
        left: 400px;
        top: 223px;
    }
    .password {
        position: relative;
    }
    .checkPass {
        position: absolute;
        left: 375px;
        top: 272px;
    }
    .repeatPass {
        position: absolute;
    }
    .checkRepeatPass {
        position: absolute;
        left: 400px;
        top: 320px;
    }
    .terms {
        display: flex;
        align-items: center;
        .checkbox {
            margin: 0;
        }
        .agreement {
            font-size: 14px;
            padding-left: 0.5rem;
        }
    }
    .checkbox {
        cursor: pointer;
    }
    .modalBtn {
        background: none;
        font-size: 14px;
        color: #055fb8;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    .social {
        display: flex;
        margin-top: 30px;
        flex-direction: row;
        justify-content: space-between;
    }
    .fb, .go {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 150px;
        gap: 0.5rem;
        border-radius: 3px;
        padding: 0.5rem 0.75rem 0.5rem 0.75rem;
        background-color: rgba(255,255,255,0.27);
        cursor: pointer;
        color: #eaf0fb;

        &:hover {
            background-color: rgba(255,255,255,0.47);
        }
    }
    .switchLink {
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        padding-top: 1rem;
    }
    .link {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: #055fb8;
        }
    }
    .password {
        position:relative;
    }
    .eyeball {
        z-index: 9999;
        position: absolute;
        left: 400px;
        top: 273px;
        cursor: pointer;
    }
`;

const Button = styled.button`
    margin-top: 1.5rem;
    width: 100%;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;

    ${props => props.disabled ? '' : 
        'cursor: pointer; &:hover { background-color: #cacaca }'};
`;

const modalStyles = {
    overlay: {
        height: '50%',
        width: '50%',
        top: '25%',
        left: '25%',
        backgroundColor: 'transparent',
    },
    content: {
        border: '1px black solid',
        backgroundColor: 'white',
        padding: '0',
    }
  };
  
export default function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ' ',
        checkTerms: false
    });
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isValidFirstName, setIsValidFirstName] = useState(false);
    const [isValidLastName, setIsValidLastName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);
    const [isValidRepeatPass, setIsValidRepeatPass] = useState(false);

 
    const handleChange = (e) => {
        e.preventDefault();
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value,
        })
    };

    useEffect(() => {
        setIsValidFirstName(userInfo.firstName.length >= 2);
        setIsValidLastName(userInfo.lastName.length >= 2);
        setIsValidEmail(/(.+)@(.+){2,}\.(.+){2,}/.test(userInfo.email));
        setIsValidPass(userInfo.password.length >= 4);
        setIsValidRepeatPass(userInfo.password === userInfo.repeatPassword);
    }, [userInfo]);

    const isBtnDisabled = isValidFirstName && isValidLastName && isValidEmail && isValidPass && isValidRepeatPass && isChecked;

    const handleCheckbox = () => {
        setIsChecked(!isChecked)
        setUserInfo({
            ...userInfo,
            checkTerms: true
        });
    };

    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, checkTerms } = userInfo;
        dispatch({
            type: 'REGISTER_USER', 
            payload: {
                firstName, 
                lastName, 
                email, 
                password, 
                checkTerms
            }
        });
        alert('Account created successfully');
        navigate('/login');
    };

    const revealPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleOpenModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = (e) => {
        e.preventDefault()
        setShowModal(false)
    };


  return (
    <Container>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <Form>
            <div className='title'>Create Your Account</div>
            <input 
                type='text' 
                name='firstName'
                className='firstName'
                placeholder='First Name' 
                id='firstName' 
                onChange={handleChange}
            />
            <span className='checkFirstName'>
                {isValidFirstName ? <FaCheck /> : ''}
            </span>
            <input 
                type='text'
                name='lastName'
                className='lastName'
                placeholder='Last Name' 
                id='lastName' 
                onChange={handleChange}
            />
            <span className='checkLastName'>
                {isValidLastName ? <FaCheck /> : ''}
            </span>
            <input 
                type='text' 
                name='email'
                className='email'
                placeholder='Email Address' 
                id='email'
                onChange={handleChange}
            />
            <span className='checkEmail'>
                {isValidEmail ? <FaCheck /> : ''}
            </span>
            <input 
                type={showPassword ? 'text' : 'password'}
                name='password'
                className='password'
                placeholder='Password' 
                id='password'
                onChange={handleChange}
            />
            <span className='checkPass'>
                {isValidPass ? <FaCheck /> : ''}
            </span>
            <span className='eyeball'>
                    {showPassword ? <FaRegEyeSlash onClick={revealPassword} /> : <FaRegEye onClick={revealPassword} />}
                </span>
            <input 
                type={showPassword ? 'text' : 'password'}
                name='repeatPassword'
                className='repeatPassword'
                placeholder='Confirm Password' 
                id='repeatPassword'
                onChange={handleChange}
            />
            <span className='checkRepeatPass'>
                {isValidRepeatPass ? <FaCheck /> : ''}
            </span>
            <div className="terms">
                <input 
                    type='checkbox'
                    name='checkbox'
                    id='checkbox'
                    className='checkbox' 
                    checked={isChecked}
                    onChange={handleCheckbox}
                />
                    <span className='agreement'>I agree to all statements in
                        <button 
                            className='modalBtn' 
                            onClick={handleOpenModal}>terms and agreement.
                        </button>
                        <Modal
                            className='modal'
                            isOpen={showModal}
                            ariaHideApp={false}
                            style={modalStyles}
                        >
                            <TermsAgreement closeModal={handleCloseModal} />
                        </Modal>
            
                    </span>
            </div>
            <Button 
                disabled={!isBtnDisabled}
                onClick={handleRegisterBtn}
            >
                Create an Account
            </Button>
            <div className='social'>
                <div className="go">
                    <FaGoogle />
                    Google
                </div>
                <div className="fb">
                    <FaFacebook />
                    Facebook
                </div>
            </div>
            <div className='switchLink'>
                <Link className='link' to='/login'>Already have an account?</Link>
            </div>
        </Form>
    </Container>
  )
};
