import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import './PhotoCard.css';
import '../App.css'
import img from '../images/abc.png';

export const PhotoCard = (props) => {
  return (
    <Card className='photoCard'>
      {/* <div className="cardImage"> */}
        <Card.Img className="cardImage" variant="top" src={img} />
      {/* </div> */}
      <Card.Body className="cardBody">
        <Container fluid style={{padding : 0}}>
        <Row className="cardBodyTitle">
        NFT Name
        </Row>
        <Row className="cardBodyDesc">
          <Col style={{padding: 0}}>
          <b>0.00</b>ETH
          </Col>
          <Col className="cardBodyLikes">
            <span style={{padding: 2}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.048 1.70105C10.4268 1.02731 9.57449 0.65625 8.6478 0.65625C7.95511 0.65625 7.32074 0.875244 6.76227 1.3071C6.48047 1.52509 6.22513 1.79178 6 2.10306C5.77496 1.79187 5.51953 1.52509 5.23764 1.3071C4.67926 0.875244 4.04489 0.65625 3.3522 0.65625C2.42551 0.65625 1.57306 1.02731 0.951874 1.70105C0.338104 2.36691 0 3.27658 0 4.2626C0 5.27747 0.378204 6.20645 1.19019 7.18625C1.91656 8.06268 2.96054 8.95239 4.16949 9.98264C4.58231 10.3345 5.05023 10.7333 5.5361 11.1581C5.66446 11.2705 5.82916 11.3324 6 11.3324C6.17075 11.3324 6.33554 11.2705 6.46371 11.1583C6.94958 10.7334 7.41779 10.3344 7.83078 9.98236C9.03955 8.9523 10.0835 8.06268 10.8099 7.18616C11.6219 6.20645 12 5.27747 12 4.26251C12 3.27658 11.6619 2.36691 11.048 1.70105Z" fill="#1B1A21"/>
            </svg>
            </span>
            <span className="cardBodyLikes">123</span>
          </Col>
        </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}