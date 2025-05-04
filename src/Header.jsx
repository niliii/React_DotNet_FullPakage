import { Container, Row, Col } from "react-bootstrap";

function MainHeader() {
  return <h1 className="fw-bold text-primary">React Course</h1>;
}

function SubHeader() {
  return <p className="text-muted fs-5">This is an exciting course</p>;
}

export default function Header() {
  return (
    <Container className="py-4">
      <Row className="text-center">
        <Col>
          <MainHeader />
       
          <SubHeader />
        </Col>
      </Row>
    </Container>
  );
}
