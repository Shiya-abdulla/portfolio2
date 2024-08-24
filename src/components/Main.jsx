import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Main.css'

function Main() {
  return (
    <>
      <div className=' dd container-fluid d-flex flex-column align-items-center' style={{height:"100vh"}}>
        <div className="d1">
        <h2 style={{ textAlign: "center",  marginTop: "50px"  , fontSize:"50px"}} className='hii'>Shiya Abdulla kv</h2>
        <h2 style={{marginBottom:"50px"}}>Software Developer</h2>      
        {/* <div style={{alignItems:"center"}}>
          <img  height={"400px"}  width={"600px"}  src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1" alt="" />
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Main;
