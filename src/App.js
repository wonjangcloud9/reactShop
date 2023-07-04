import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import drink from "./img/drink.png";
import pill from "./img/pill.jpeg";
import sex from "./img/sex.webp";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">꼽냐</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">시</Nav.Link>
            <Nav.Link href="#features">발</Nav.Link>
            <Nav.Link href="#pricing">아</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm={4}>
            <Image
              src={drink}
              rounded
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col sm={4}>
            <Image
              src={pill}
              rounded
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col sm={4}>
            <Image
              src={sex}
              rounded
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
