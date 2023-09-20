import React, {useEffect} from "react"
import { Container, Row, Col, Button} from "react-bootstrap"
import * as braze from '@braze/web-sdk'

export default function ContentCards() {

    useEffect(() => {
        braze.showContentCards(document.getElementById('standard-feed'));
    }, [])

    function toggleStandardFeed() {
        braze.toggleContentCards(document.getElementById('standard-feed'))
    }

    return (
        <Container>
        <h1>Content Cards</h1>
        <ul>
            <li>both custom & Braze feeds?</li>
            <li>Styled content card feed</li>
            <li>Hide Content Cards button</li>
        </ul>
        <Row>
            <div>display banner here?</div>
        </Row>
        <Row>
            <Col>
                <h4>Custom Feed</h4>
            </Col>
            <Col>
                <h4>Standard Feed</h4>
                <Button variant="outline-primary" onClick={toggleStandardFeed}>Toggle Content Cards</Button>
                <Container id="standard-feed">
                </Container>
            </Col>
        </Row>
        </Container>        
    )
}