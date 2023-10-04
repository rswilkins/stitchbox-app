import { Alert } from "react-bootstrap"

export default function StitchboxAlert({variant, header, message}) {
    return (
        <Alert variant={variant} dismissable>
            <Alert.Heading>{header}</Alert.Heading>
            <p>
                {message}
            </p>
        </Alert>
    )
}