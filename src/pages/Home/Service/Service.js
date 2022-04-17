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
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={handleCheckOut} className='btn btn-success'>Check Out</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;