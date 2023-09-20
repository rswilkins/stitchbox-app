import { CurrentUserData } from "./CurrentConnectionData"

export default function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light fixed-bottom">
                <small className="text-muted text-start" style={{marginLeft:'20px'}}><strong>Current User External Id:</strong> {CurrentUserData}</small>
        </footer>

    )
}