import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function Ourworks() {
  return (
    <div className='p-4' style={{  backgroundColor: "black", color: "white"}}>
      <div>
        <h2 style={{ textAlign: "center" }}>My Works</h2>
        <div className='d-flex justify-content-center mt-5 mb-5'>
          <Row className="g-4">
            <Col sm={12} md={4}>
              <Card className="h-100">
                <Card.Img variant="top" height={'200px'} src="https://media.licdn.com/dms/image/D5612AQEbyga_R28Hyw/article-cover_image-shrink_600_2000/0/1716875536330?e=2147483647&v=beta&t=DKJo-EoPF-i9vhjr-jwAcD6nVgBW2gE-ip1h6v37KDc" />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    A personal portfolio website built with HTML, CSS, and Bootstrap, featuring responsive design and smooth navigation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className="h-100">
                <Card.Img variant="top" height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQulV93Hs25qtS_-Uw4rGSVGiunvGYvVEUCA&s" />
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    A simple to-do list app created with JavaScript, allowing users to add, edit, and delete tasks.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card className="h-100">
                <Card.Img variant="top" height={'200px'} src="https://www.lambdatest.com/blog/wp-content/uploads/2023/04/Frame252525252525201.png" />
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>
                    A weather forecast app developed using React, demonstrating API integration and state management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Ourworks;
