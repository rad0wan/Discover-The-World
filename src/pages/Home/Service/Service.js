import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
    const navigate = useNavigate()

    const { name, img, price, details } = service

    const handleCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <Col>
            <Card className='text-center shadow-sm hover-shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text style={{ color: 'gray' }}>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        Price: <span style={{ color: 'orange', fontSize: '22px' }}>${price}</span>
                    </Card.Text>
                </Card.Body>
                <button onClick={handleCheckOut} className='btn btn-success w-50 mx-auto mb-3 d-flex align-items-center justify-content-center'>Check Out<FaArrowRight className='ms-2' size={30}></FaArrowRight></button>
            </Card>
        </Col>
    );
};

export default Service;