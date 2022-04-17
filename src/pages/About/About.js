import React from 'react';
import img from '../../images/me.png'
import './About.css'

const About = () => {
    return (
        <div className='about container d-flex flex-column justify-content-center align-items-center'>
            <img className='rounded-circle ' src={img} alt="" />
            <p>Ridwan Ahmead</p>
            <p>I will be a junior font end developer next three 2-5 months.</p>
        </div>
    );
};

export default About;