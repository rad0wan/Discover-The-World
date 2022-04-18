import React from 'react';
import img from '../../images/me.png'
import './About.css'

const About = () => {
    return (
        <div className='about container d-flex flex-column justify-content-center align-items-center'>
            <img className='rounded-circle ' src={img} alt="" />
            <p>Ridwan Ahmead</p>
            <p className='text-center'>Insallah,I will be a junior font end developer next three 2-5 months.
                <br />I think that my biggest attribute to any success that I have had is hard work.
                <br /> There really is no substitute for working hard.
                <br /> so, I always work hard with brainstorming to reach my goal.
            </p>
        </div>
    );
};

export default About;