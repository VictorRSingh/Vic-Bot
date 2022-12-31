import { Row, Container } from "react-bootstrap"
import About from "../components/About"
import Hobbies from '../components/Hobbies'
import ProjectsOverview from "../components/ProjectsOverview"
export default function Home() {
  return (
    <>
      <Container className="homepage">
        <Row className="justify-content-center">
          Logo goes here
        </Row>
        <br />
        <Row >
            <About />
            <Hobbies />
        </Row>
        <br />
        <ProjectsOverview />
      </Container>
    </>
  )
}
