import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSignUp = () => {
        navigate('/signup')
    }

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <h2 className='text-center text-primary my-4'>Please Sign In</h2>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='my-2 '>New to Discover the World? <Link to='/signup' onClick={handleSignUp} className='text-danger text-decoration-none'>Sign Up</Link></p>
                <Button className='my-2' variant="primary" type="submit">
                    Sign In
                </Button>
                <p className='text-center'>
                    Sign with 
                </p>
            </Form>

        </div>
    );
};

export default Login;