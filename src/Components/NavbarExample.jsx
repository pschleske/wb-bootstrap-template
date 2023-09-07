import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavbarExample() {
  return (
    <Navbar expand="md" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Container Fluid
            </Link>
            <Link className="nav-link" to="/column-sizing">
              Column Sizing
            </Link>
            <Link className="nav-link" to="/sidebar">
              Sidebar
            </Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link dropdown-link" to="/offset">
                  Offset
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link dropdown-link" to="/ordering">
                  Ordering
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link dropdown-link" to="/icons">
                  Icons
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
