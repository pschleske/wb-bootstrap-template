import { Container, Row, Col } from "react-bootstrap";

export default function OffsetExample() {
  return (
    <Container fluid>
      <Row>
        <Col className='no-border' xs={{ offset: 7 }}>
          <img src="../../img/puppy.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
