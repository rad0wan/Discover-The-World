import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {

    const handleProceedCheckout = event => {
        event.preventDefault()
        toast('Thank you for your CheckOut')
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary my-4'>Please Proceed Checkout</h2>
            <Form onSubmit={handleProceedCheckout} className=''>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Your Number" required />
                </Form.Group>
                <Button className='my-2' variant="primary" type="submit">
                    Proceed Checkout
                </Button>
            </Form>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;