import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()

    const { name, img, price, details } = service

    const handleCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <Col>
            <Card className='text-center'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        Price: <span style={{ color: 'orange', fontSize: '22px' }}>${price}</span>
                    </Card.Text>
                </Card.Body>
                <button onClick={handleCheckOut} className='btn btn-success w-50 mx-auto mb-3'>Check Out</button>
            </Card>
        </Col>
    );
};

export default Service;