import { Row, Col } from 'react-bootstrap'

export default function Logo(props) {
    return (<>
        <Row>
            <Col>
                <img className='mx-auto d-block' src="/images/logo.png"/>
            </Col>
        </Row>
    </>)
}