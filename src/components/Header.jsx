import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
<>
<Navbar >
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"40px" }} ><h1  style={{textAlign:"center" , color:"black"}}>
 {' '}
           PORTFOLIO
           </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
</>
  )
}


export default Header