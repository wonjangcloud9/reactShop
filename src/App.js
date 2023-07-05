import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">꼽냐</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">시</Nav.Link>
            <Nav.Link href="detail">발</Nav.Link>
            <Nav.Link href="#pricing">아</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route
          path="/detail"
          element={
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    width="100%"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">상품명</h4>
                  <p>상품설명</p>
                  <p>120000원</p>
                  <button className="btn btn-danger">주문하기</button>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
