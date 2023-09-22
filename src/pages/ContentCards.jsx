import React, {useEffect, useState} from "react"
import { Container, Row, Col, Button} from "react-bootstrap"
import * as braze from '@braze/web-sdk'
import CustomContentCard from "../CustomContentCard"

export default function ContentCards() {
    const [cards, setCards] = useState(braze.getCachedContentCards())
    //console.log(cards.cards[0].title)

    useEffect(() => {
        braze.showContentCards(document.getElementById('standard-feed'));
    }, [])

    function toggleStandardFeed() {
        braze.toggleContentCards(document.getElementById('standard-feed'))
    }

    return (
        <Container>
        <h1>Content Cards</h1>
        <Row>
            <Col>
                <h4>Custom Feed</h4>
                <Container className="overflow-auto">
                    <CustomContentCard cards={cards.cards}></CustomContentCard>
                </Container>
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