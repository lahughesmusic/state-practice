import { Navbar, Container, Nav } from "react-bootstrap";

const Navigator = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TOOL TEACH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="troubleshoot">Troubleshooting</Nav.Link>
            <Nav.Link href="pros">PROs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigator;
