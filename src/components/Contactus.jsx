import React from 'react';
import Form from 'react-bootstrap/Form';
import './Contactus.css';

function Contactus() {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2 className='text-center'>Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button type="submit" className="btn-submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default Contactus;
