import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contactme-img1.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () =>{
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mjkrbyk', 'template_x9ls01i', form.current, 'ssRS8bSp-m7Znx1bh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact us'/>
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                        <Col>
                            <input type="text" name="user_name" placeholder='First Name'/>
                        </Col>
                        <Col>
                         <input type="email" name="user_email" placeholder='Email'/>
                        </Col>
                        <Col>
                            <textarea name="message" placeholder='Type your message here...'/>
                            <input type="submit" value="Send" />
                        </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}