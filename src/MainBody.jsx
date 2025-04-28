import { Container, Row, Col } from "react-bootstrap";
import Student from "./Student";
import StudentReview from "./StudentReview";

export default function Mainbody() {
  const whatWillLearn = "React19";
  const lecture = 3;

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="fw-bold">Welcome to {whatWillLearn} Course</h2>
          <p className="text-muted">Total Lectures: {lecture}</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Student
            experience={2}
            name="Nima Ebz"
            headshot="https://avatar.iran.liara.run/public/19"
          >
            <StudentReview />
          </Student>
        </Col>
        <Col md={6}>
          <Student
            experience={6}
            name=" Fatemeh ebz"
            headshot="https://avatar.iran.liara.run/public/25"
          >
            <StudentReview />
          </Student>
        </Col>
      </Row>
    </Container>
  );
}
