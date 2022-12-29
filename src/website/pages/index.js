import { Row, Col } from "react-bootstrap"
import Contact from "../components/Contact"
import Logo from "../components/Logo"
export default function Home() {
  return (
    <>
      <Contact/>
      <Logo />
      <Row>
        <Col>
          Thank you for visitng my webpage
        </Col>
      </Row>
    </>
  )
}
