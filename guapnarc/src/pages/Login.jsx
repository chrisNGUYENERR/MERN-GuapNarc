import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaGoogle, FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Container = styled.div`
    height: 100vh;
    background-color: #080710;
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
        left: -100px;
        top: -60px;
    }
    .shape:last-child {
        background: linear-gradient(
            to right,
            #ff512f,
            #f09819
        );
        right: -100px;
        bottom: -100px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 350px;
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
        padding: 0 0.5rem;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 300
    }
    input::placeholder {
        color: #e5e5e5;
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
        position: relative;
    }
    .eyeball {
        z-index: 9999;
        position: absolute;
        left: 400px;
        margin-top: -47px;
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

export default function Login() {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [isValidInfo, setIsValidInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const revealPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };

    useEffect(() => {
        setIsValidInfo(/(.+)@(.+){2,}\.(.+){2,}/.test(userInfo.email) && userInfo.password.length >= 4)
    }, [userInfo])

    const handleChange = (e) => {
        e.preventDefault();
        setUserInfo({
            ...userInfo, 
            [e.target.name] : e.target.value
        });
        // console.log(userInfo)
    };
    
    
    const isBtnDisabled = isValidInfo;

    const handleLoginBtn = (e) => {
        e.preventDefault();
        console.log(userInfo, 'login')
    };

  return (
    <Container>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <Form>
            <div className='title'>Welcome Back</div>
                <input 
                    type='text' 
                    name='email'
                    placeholder='Email Address' 
                    id='username'
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <input 
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    className='password'
                    placeholder='Password' 
                    id='password'
                    value={userInfo.password}
                    onChange={handleChange}
                />
                <span className='eyeball'>
                    {showPassword ? <FaRegEyeSlash onClick={revealPassword} /> : <FaRegEye onClick={revealPassword} />}
                </span>
            <Button
                disabled={!isBtnDisabled} 
                onClick={handleLoginBtn}
            >
                    Log In
            </Button >
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
                <Link className='link' to='/register'>Need an account?</Link>
            </div>
        </Form>
    </Container>
  )
};
