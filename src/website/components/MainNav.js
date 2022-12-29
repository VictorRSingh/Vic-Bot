import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import Link from "next/link";


function BasicExample() {
  const router = useRouter();
console.log(__dirname);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img 
            src="/images/brand.png"
            width={128}
            height={64}
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/"}>Home</Nav.Link>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/projects"}>
                  Projects
                </Nav.Link>
              </Link>
              <Link href="/resume" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/resume"}>
                  Resume
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
