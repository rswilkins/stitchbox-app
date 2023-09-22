import { Button, Card } from "react-bootstrap"
import * as braze from "@braze/web-sdk";

export default function CustomContentCard({ cards }) {

    console.log(cards)
    function handleClick() {
        // window.location = {url}
    }
    
    return (
            <>
            {cards.map(card => {
                return (
                    <Card style={{width: '18rem'}} id={card.id}>
                        <Card.Img variant="top" src={card.imageUrl}></Card.Img>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text className="mb-2 text-muted">{card.description}</Card.Text>
                        </Card.Body>             
                    </Card>
                )
            })}  
            </>
    )
}