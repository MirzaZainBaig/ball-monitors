import React, { useState } from 'react'
import axios from 'axios';
import loginValidation from './loginValidation';
import signupValidation from './signupValidation';
import { Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [errors, setErrors] = useState({})

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/register", {
            email: email,
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                setRegisterStatus("Account created successfully");
            }
        }).catch((error) => {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Response error:', error.response.data);
                setRegisterStatus('Response error: ' + error.response.data.message);
            } else if (error.request) {
                // No response received from server
                console.error('Request error:', error.request);
                setRegisterStatus('Request error: No response from server');
            } else {
                // Other errors
                console.error('Error:', error.message);
                setRegisterStatus('Error: ' + error.message);
            }
        });
        setErrors(signupValidation(email, password));
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center gap-4 vh-100 bg-danger'>
                <div className='bg-white p-5 w-25 rounded'>
                    <h2 className='text-center text-info'><b>Register</b></h2>
                    <form action="">
                        <div className='mb-3'>
                            <label htmlFor="username"><b>UserName</b></label>
                            <input type="text" name='username' placeholder='Enter Your UserName'
                                className='form-control rounded-0' onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Email"><b>Email</b></label>
                            <input type="email" name='email' placeholder='Enter Your Email'
                                className='form-control rounded-0' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" name='password' placeholder='Enter your passsword'
                                className='form-control rounded-0' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button type='submit' onClick={register} className='btn btn-info w-100 mb-3'><b>Register</b></button>
                        <Link to = '/' className='btn btn-light w-100 mb-3'>Already have an Account</Link>
                        <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '10px' }}>{registerStatus}</h1>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup