import { Container } from "react-bootstrap"

export default function InAppMessages() {
    return (
        <>
        <Container className="jumbotron">
            <h1 className="display-3 mt-4">In-App Messages</h1>
            <p className="lead">Stitchbox displays any new In-App Messages that you trigger for the tracked user. </p>
            <p>It's using <kbd>braze.automaticallyShowInAppMessages</kbd> to do so. To customize which In-App Messages are shown, update <a href="https://github.com/rswilkins/stitchbox-app">Stitchbox code</a> directly.</p>
        </Container>
        </>
    )
}