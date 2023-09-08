import { Container, Row, Col } from "react-bootstrap";

export default function ResponsiveSidebarExample() {
  return (
    <Container>
      <Row>
        <Col xs='12' md='6' lg='3'>SideBar</Col>
        <Col xs='12' md='6' lg='9'>Main Container</Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
