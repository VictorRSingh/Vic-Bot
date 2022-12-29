import { Col, Row } from "react-bootstrap";

export default function Contact(props) {
    return(<>
        <Row>
            <Col className="text-center fixed" style={{ 
                fontSize: '24px',
                width: '100vw'
                }}>
                Email: vsingh57@myseneca.ca | Phone: (647)-448-9431 
            </Col>
        </Row>
    </>)
}