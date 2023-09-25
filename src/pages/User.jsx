import { useState } from "react"
import { Container, Form, Button, Stack } from "react-bootstrap"
import * as braze from "@braze/web-sdk"

export default function User() {
    const [customEvent, setCustomEvent] = useState('')
    const [productId, setProductId] = useState('')
    const [price, setPrice] = useState(0)
    
    function logEvent() {
        braze.logCustomEvent(customEvent)
        setCustomEvent('')
        alert(`Logged event ${customEvent}`)
    }

    function logPurchase() {
        braze.logPurchase(productId, price)
        setProductId('')
        setPrice(0)
        alert(`Logged purchase: ${productId} for ${price}`)
    }
    
    return (
        <Container className="jumbotron">
            <h1 className="display-3 mt-4">User Data</h1>
            <p className="lead">Log custom events and purchases for the tracked user.</p>
            <Form.Label htmlFor="customEvent">Log Custom Event</Form.Label>
            <Form.Control id="customEvent" value={customEvent} onChange={(e) => setCustomEvent(e.target.value)}></Form.Control>
            <Button onClick={logEvent} variant="primary mt-3">Log Event</Button>
            <hr></hr>
            <Form.Label htmlFor="productId">Log Purchase</Form.Label>
            <Stack direction="horizontal" gap={3}>
                <Form.Control id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="enter product name here"></Form.Control>
                <Form.Control id="price" value={price} onChange={(e) => setPrice(e.target.value)} prefix={'$'}></Form.Control>
            </Stack>
            <Button onClick={logPurchase} variant="primary mt-3">Log Purchase</Button>
        </Container>
    )
}