import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate('/signup')
    }

    


    return (
        <div>
            <h2 className='text-center text-primary my-4'>Please Sign In</h2>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p className='my-2 '>New to Discover the World? <Link to='/signup' onClick={handleSignUp} className='text-danger text-decoration-none'>Sign Up</Link></p>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    );
};

export default Login;