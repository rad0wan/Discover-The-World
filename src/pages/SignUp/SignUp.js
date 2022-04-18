import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home')
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSignUp = event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
        console.log(email, password);
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' mx-auto login mb-5'>
            <h2 className='text-center text-primary my-4'>Please Sign Up</h2>
            <Form onSubmit={handleSignUp} className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='my-2 '>Already Discover the World? <Link to='/login' className='text-danger text-decoration-none'>Sign In</Link></p>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            {errorElement}
        </div>
    );
};

export default SignUp;