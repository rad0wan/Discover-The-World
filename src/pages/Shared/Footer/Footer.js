import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
    return (
        <div className='bg-black text-center text-white py-5'>
            <p style={{ margin: '0px' }}>CopyRight 2022</p>
            <p>Contact us
                <BsFacebook style={{ cursor: 'pointer',margin:'0 10px' }} size={30}></BsFacebook>
                <FcGoogle style={{ cursor: 'pointer', marginRight:'10px'}} size={30}></FcGoogle>
                <BsLinkedin style={{ cursor: 'pointer' }} size={30}></BsLinkedin>
            </p>
        </div>
    );
};

export default Footer;