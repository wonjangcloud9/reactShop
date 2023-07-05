import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import data from "./data.js";

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
          {data.map((item, index) => {
            return (
              <Col sm={4} key={index}>
                <Image
                  src={item.image}
                  rounded
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ marginBottom: "1rem" }}></div>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
