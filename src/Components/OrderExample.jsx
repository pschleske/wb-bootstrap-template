import { Container, Row, Col } from "react-bootstrap";

export default function OrderExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' md={{ span: 3, order: 2 }}>
          <h1>Tabel of Contents</h1>
          <p>On top of small screens, appears right for m screens</p>
        </Col>
        <Col xs='12' md={{ span: 9, order: 1 }}>
          <h1>Article</h1>
          <p>on bottom small screens, appears left for m screens</p>
        </Col>
      </Row>
    </Container>
  );
}
