import { Container, Row, Col, Nav, Navbar, Toggle } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

function BasicExample() {
  const router = useRouter();

  return (
    <>
      <Navbar variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home"><span className="first-name">Victor</span> <span className="last-name">Singh</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/"}>Home</Nav.Link>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/projects"}>
                  Projects
                </Nav.Link>
              </Link>
              <Link href="/resume" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/resume"}>Interactive Resume</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BasicExample;
