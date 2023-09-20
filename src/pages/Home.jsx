import UpdateBrazeConnection from "../UpdateBrazeConnection";
import UpdateBrazeUser from "../UpdateBrazeUser";
import { Container, Button, Stack, Col, Row } from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <div className="jumbotron">
                <h1 className="display-3 mt-4">Welcome to Stitchbox</h1>
                <p className="lead">Stitchbox is a simple web app featuring fully functional Braze Web SDK and REST API integrations.</p>
            </div>
            <hr></hr>
        <Row>
            <Col>
                <Container style={{backgroundColor: '#E3D4FF', padding: '15px', borderRadius: '5px'}}>
                    <UpdateBrazeConnection/>
                </Container>
            </Col>
            <Col>
                <Container style={{backgroundColor: '#C4F1CC', padding: '15px', borderRadius: '5px'}}>
                    <UpdateBrazeUser/>
                </Container>
            </Col>
        </Row>
        </Container>
    )
}