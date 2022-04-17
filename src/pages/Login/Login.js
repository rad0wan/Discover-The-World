import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if (user || gitUser || googleUser) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const handleGoogle = () => {
        signInWithGoogle()
    }
    const handleGithub = () => {
        signInWithGoogle()
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        } else {
            toast('please give a email')
        }

    }

    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error || gitError || googleError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {gitError?.message} {googleError?.message}</p>
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary my-4'>Please Sign In</h2>
            <Form onSubmit={handleSignIn} className=''>
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
                <Button className='my-2' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
            <div>
                <p className='my-2 '>New to Discover the World? <Link to='/signup' onClick={handleSignUp} className='text-success text-decoration-none'>Sign Up</Link></p>
                <p>Forget password?<button onClick={handleReset} className='text-success btn btn-link'>Reset password</button></p>
                {errorElement}
                <p className='text-center'>
                    Sign with <FcGoogle onClick={handleGoogle} className='me-3' style={{ cursor: 'pointer' }} size={50}></FcGoogle>
                    <BsGithub onClick={handleGithub} style={{ cursor: 'pointer' }} size={50}></BsGithub>
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;