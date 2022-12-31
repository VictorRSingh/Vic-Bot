import { Container, Col, Row } from "react-bootstrap"

export default function About(props) {
    return(<>
        <Col className="text-center" md={{span: 6}}>
        <Container>
            <Row>
                <Col>
                    <h4>About me:</h4>
                        Currently attending <a href="http://senecacollege.ca" target="_blank" rel="noopener noreferrer">Seneca College</a> for <a href="https://www.senecacollege.ca/programs/fulltime/CPA.html" target="_blank" rel="noopener noreferrer">Computer Programming & Analysis</a>.
                        When COVID-19 occured I decided to step down for my management position at No Frills to further develop a career.<br/>
                        I chose computer programming as I love computers and wanted to be able to make applications that can better day to day life.
                </Col>
            </Row>
          </Container>
        </Col>
    </>)
}