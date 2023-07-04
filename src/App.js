import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

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
    </div>
  );
}

export default App;
