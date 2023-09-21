import { Button, Card } from "react-bootstrap"

export default function CustomContentCard({ url, imageUrl, title, description}) {
    
    function handleClick() {
        window.location = {url}
    }
    
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl}/>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Button variant="primary" onClick={handleClick}>Check it out</Button>
        </Card>
    )
}