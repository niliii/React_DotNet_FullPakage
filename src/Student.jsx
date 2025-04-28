import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function Student(props) {
  const fullname = "Niloo Ebz";
  const programmingexp = "midlevel";

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <h2 className="text-center">Student Enrolled</h2>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <Image
                src={props.headshot}
                roundedCircle
                width={120}
                height={120}
                className="mb-3"
              />
              {/* <Card.Title className="mb-2">{fullname}</Card.Title> */}
              <div className="col-10">{props.name}</div>
              <Card.Text className="text-muted">
                Coding since {props.experience} years
              </Card.Text>
              <div className="col-2">{props.children}</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
